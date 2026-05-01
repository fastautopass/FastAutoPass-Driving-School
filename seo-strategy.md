
# FastAutoPass Bradford SEO Re-Indexing Strategy

## 1. Technical Implementation Checklist
- [x] **Semantic Silo Structure:** Established `/bradford/[area]` pathing.
- [x] **Topical Authority:** Enriched `AreaPage` with local routes, landmarks, and challenges.
- [x] **Internal Linking:** Every location links to the Hub, 4-6 neighbors, and Service pages.
- [x] **Schema Markup:** Recommended implementing LocalBusiness and Service schema (JSON-LD) in the `index.html`.
- [x] **Mobile Optimization:** Fully responsive Tailwind design with sticky mobile CTAs.

## 2. Sitemap Management
- A dynamic Sitemap component is available at `/sitemap`.
- **Action:** Copy the raw XML from the sitemap page and host it as `sitemap.xml` in the root directory for Google Search Console.

## 3. Google Search Console Submission
1. **URL Inspection:** Manually inspect the new `/bradford/` hub and 5-10 key area pages (Shipley, Heaton, etc.).
2. **Request Indexing:** Trigger the "Request Indexing" button for each high-priority page.
3. **Submit Sitemap:** Add the link to the `sitemap.xml` in the Sitemaps section.

## 4. Google Indexing Readiness & Fixes
- **404 Cleanup:** Ensure old URLs (if any) are 301 redirected to the new `/bradford/area-id` structure.
- **Canonical Tags:** Ensure each page has a self-referencing canonical tag to prevent duplicate content issues.
- **Speed Monitoring:** Monitor Core Web Vitals in Search Console; ensure images are optimized (WebP).

## 5. Publishing Workflow
1. **Audit:** Verify all 30 locations display correct local landmarks.
2. **Live Test:** Check the Booking Form sends correct `areaName` to the lead handler.
3. **Verify Linking:** Ensure the Footer links correctly to the Hub and top areas.
4. **Resubmit:** After 7 days, resubmit the sitemap if pages remain "Discovered - currently not indexed".
