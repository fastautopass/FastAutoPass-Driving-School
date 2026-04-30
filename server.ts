import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const initialSmtpUser = process.env.SMTP_USER?.trim();
  console.log(`[STARTUP] Active SMTP User: ${initialSmtpUser || 'NOT SET'}`);

  // API Route for Enquiry
  app.post('/api/enquiry', async (req, res) => {
    const { name, phone, postcode, experience, lessonType, areaName, consent } = req.body;

    // 1. Validation
    if (!name || !phone || !postcode || !lessonType) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields (name, phone, postcode, lessonType)' 
      });
    }

    if (!consent) {
      return res.status(400).json({ 
        success: false, 
        message: 'Consent is required to submit the form' 
      });
    }

    // 2. Always log the enquiry to the server console first (Safety net / Requirement 5)
    console.log('--- NEW ENQUIRY RECEIVED ---');
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Postcode: ${postcode}`);
    console.log(`Experience: ${experience}`);
    console.log(`Lesson Type: ${lessonType}`);
    console.log(`Area: ${areaName}`);
    console.log('---------------------------');

    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    const fromEmail = process.env.FROM_EMAIL?.trim();
    const toEmail = process.env.TO_EMAIL?.trim();

    if (!smtpUser || !smtpPass) {
      console.error("SMTP credentials missing");
      throw new Error("SMTP credentials not set in environment variables");
    }

    // Log configuration status (sanitized)
    console.log('--- SMTP CONFIG MONITOR ---');
    console.log(`User: ${smtpUser}`);
    console.log(`Pass: ${smtpPass ? '********' + smtpPass.slice(-4) : 'MISSING'}`);
    console.log(`From: ${fromEmail}`);
    console.log(`To: ${toEmail}`);
    console.log('---------------------------');

    try {
      // 3. Attempt real email delivery
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"FastAutoPass Enquiry" <${fromEmail}>`,
        to: toEmail,
        replyTo: `"${name}" <${fromEmail}>`, // Using fromEmail because typical users don't provide email, but we could add email field if needed
        subject: `New Enquiry: ${name} (${areaName})`,
        text: `
          New Enquiry Received:
          
          Name: ${name}
          Phone: ${phone}
          Postcode: ${postcode}
          Experience: ${experience}
          Lesson Type: ${lessonType}
          Area: ${areaName}
          
          Sent from: ${req.headers.origin || 'Direct Access'}
        `,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #e11d48; border-bottom: 2px solid #e11d48; pb: 10px;">New Website Enquiry</h2>
            <div style="padding: 15px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Postcode:</strong> ${postcode}</p>
              <p><strong>Experience:</strong> ${experience}</p>
              <p><strong>Lesson Type:</strong> ${lessonType}</p>
              <p><strong>Area:</strong> ${areaName}</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 12px; color: #666; text-align: center;">Sent from: ${req.headers.origin || 'Direct Access'}</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`✅ Email notification sent successfully to ${toEmail}`);
      res.json({ 
        success: true, 
        message: 'Your enquiry has been sent successfully. We will contact you shortly.' 
      });

    } catch (error) {
      // 4. Handle SMTP errors gracefully
      console.error('❌ Error sending email notification:', error);
      
      const errorMessage = error instanceof Error ? error.message : String(error);
      
      // If it's a login error, provide a specific warning in logs
      if (errorMessage.includes('535') || errorMessage.includes('Invalid login')) {
        console.error('CRITICAL: SMTP Authentication failed. Check SMTP credentials.');
      }

      // Requirement 3: Show user-friendly message if email fails
      res.status(500).json({ 
        success: false, 
        message: 'Something went wrong. Please try again or call us directly.' 
      });
    }
  });

  // Vite middleware for development or production SSR
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);

    app.use(async (req, res, next) => {
      const url = req.originalUrl;

      try {
        let template = await fs.readFile(
          path.resolve(__dirname, 'index.html'),
          'utf-8'
        );
        template = await vite.transformIndexHtml(url, template);
        const { render } = await vite.ssrLoadModule('/entry-server.tsx');

        // wait for render to complete (may be async if we used suspense)
        const { html, seoData } = render(url);

        let appHtml = template.replace(`<!--app-html-->`, html);
        
        // Inject SEO metadata
        if (seoData.title) {
          appHtml = appHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${seoData.title}</title>`);
        }
        
        let headInjections = '';
        if (seoData.description) {
          headInjections += `    <meta name="description" content="${seoData.description}">\n`;
        }
        if (seoData.canonical) {
          headInjections += `    <link rel="canonical" href="${seoData.canonical}">\n`;
        }
        
        if (headInjections) {
          appHtml = appHtml.replace('</head>', `${headInjections}</head>`);
        }

        res.status(200).set({ 'Content-Type': 'text/html' }).end(appHtml);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });

  } else {
    // Production SSR
    const distPath = path.join(process.cwd(), 'dist/client');
    const ssrPath = path.join(process.cwd(), 'dist/server/entry-server.js');
    
    app.use(express.static(distPath, { index: false }));

      app.use(async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const template = await fs.readFile(
          path.join(distPath, 'index.html'),
          'utf-8'
        );
        const { render } = await import(ssrPath);
        const { html, seoData } = render(url);
        
        let appHtml = template.replace(`<!--app-html-->`, html);
        
        // Inject SEO metadata
        if (seoData.title) {
          appHtml = appHtml.replace(/<title>.*?<\/title>/, `<title>${seoData.title}</title>`);
        }
        if (seoData.description) {
          const metaDesc = `<meta name="description" content="${seoData.description}">`;
          appHtml = appHtml.replace('</head>', `    ${metaDesc}\n</head>`);
        }
        if (seoData.canonical) {
          const canonical = `<link rel="canonical" href="${seoData.canonical}">`;
          appHtml = appHtml.replace('</head>', `    ${canonical}\n</head>`);
        }

        res.status(200).set({ 'Content-Type': 'text/html' }).end(appHtml);
      } catch (e) {
        next(e);
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
