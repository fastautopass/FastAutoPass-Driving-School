import http from 'http';
import fs from 'fs';
import path from 'path';

function getUrlsFromSitemap() {
  const sitemapPath = path.resolve('public/sitemap.xml');
  const content = fs.readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const regex = /<loc>(https:\/\/fastautopass\.co\.uk\/[^<]*)<\/loc>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    urls.push(match[1].replace('https://fastautopass.co.uk', ''));
  }
  return urls;
}

async function auditPage(route) {
  return new Promise((resolve) => {
    http.get('http://127.0.0.1:3000' + route, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const h1Match = data.match(/<h1[^>]*>(.*?)<\/h1>/i);
        const h2Matches = data.match(/<h2/gi) || [];
        const titleMatch = data.match(/<title>(.*?)<\/title>/i);
        const metaDescMatch = data.match(/<meta name="description" content="(.*?)"/i);
        const canonicalMatch = data.match(/<link rel="canonical" href="(.*?)"/i);
        const schemaMatch = data.includes('application/ld+json');
        const mainContent = data.includes('FastAutoPass') || data.length > 5000;

        resolve({
          route,
          status: res.statusCode,
          ssr: data.length > 1000,
          mainContent,
          h1: h1Match ? h1Match[1].trim().replace(/<[^>]*>?/gm, '') : 'MISSING',
          h2Count: h2Matches.length,
          title: titleMatch ? titleMatch[1] : 'MISSING',
          metaDesc: metaDescMatch ? 'PRESENT' : 'MISSING',
          canonical: canonicalMatch ? 'PRESENT' : 'MISSING', // We know they are currently missing/minimal
          schema: schemaMatch ? 'PRESENT' : 'MISSING',
        });
      });
    }).on('error', err => {
      resolve({ route, error: err.message });
    });
  });
}

async function runAudit() {
  const urls = getUrlsFromSitemap();
  console.log(`Auditing ${urls.length} pages...`);
  
  const results = [];
  const concurrency = 5;
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(url => auditPage(url)));
    results.push(...batchResults);
    if (i % 20 === 0) console.log(`Progress: ${i}/${urls.length}...`);
  }

  // Check robots.txt
  const robotsOk = await new Promise(resolve => {
    http.get('http://127.0.0.1:3000/robots.txt', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data.includes('User-agent: *') && !data.includes('Disallow: / ')));
    }).on('error', () => resolve(false));
  });

  console.log('\n--- AUDIT RESULTS JSON ---');
  console.log(JSON.stringify({ results, robotsOk }, null, 2));
}

runAudit();
