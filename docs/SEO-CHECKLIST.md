# SEO practice and client launch checklist

## This prototype

Implemented: descriptive Swedish title and description, Open Graph sharing metadata, mobile viewport, semantic sections, one H1, and crawlable `public/robots.txt`. Existing lightweight local assets avoid external font/image requests.

**`index.html` deliberately contains `noindex, follow`.** Crawlers must be allowed to fetch the page to read this. Do not add `Disallow: /` to robots.txt. Noindex is not privacy or password protection, and removal from search is not immediate if a URL was already indexed.

Canonical URLs, `og:url`, social preview images, sitemap and LocalBusiness structured data are intentionally deferred: the final domain, image and real business details are not known. Never publish invented addresses, reviews or ratings in structured data. Open Graph is for sharing, not a ranking guarantee.

Run `npm run check:seo` to build and check the generated HTML and robots file using Node's built-in assertions. These checks deliberately enforce prototype mode; revise them for a real launch. They do not measure rankings, performance or full accessibility.

## What you can do yourself now

1. Deploy the latest GitHub `main` on Netlify (build `npm run build`, publish `dist`, base directory blank).
2. Open the deployed page's source and confirm `noindex, follow`. Visit `/robots.txt` and confirm it is readable. Check the actual HTML, not just the local source.
3. Run PageSpeed Insights on the deployed URL, or Chrome DevTools Lighthouse in a private browser window for mobile and desktop. Record performance, accessibility and best-practice results. The SEO audit will flag noindex; that is intentional. New sites may have no real-user field data yet.
4. Test keyboard navigation, 200% zoom, narrow screens and booking links manually. Automated accessibility scores do not prove accessibility.
5. Optionally connect a domain in Netlify Domain management, follow its DNS instructions and confirm HTTPS. Choose a primary hostname and redirect the alternative hostname to it.
6. Optionally verify ownership in Google Search Console. For a domain you own, use a Domain property and Google's DNS TXT record. For a Netlify subdomain, use a URL-prefix property and an offered verification method (an HTML verification file can go in `public/`). Send me the verification file/tag if you want help installing it. Do not share account passwords.
7. Use Search Console URL Inspection to learn how Google sees the page. A live test should detect noindex. Do not request indexing or submit a sitemap for this fictional demo. Do not create a Google Business Profile for Studio Lugn.

## Before launching a real client website

- [ ] Obtain permission and real business name, services, location, contact details, hours, prices, and the exact business-specific booking URL.
- [ ] Replace demo content and metadata; write useful service/location text naturally, not repeated keywords. Make the primary heading clearly explain the real offering.
- [ ] Confirm the final HTTPS primary domain, hostname redirects and one preferred homepage URL.
- [ ] Add an absolute self-referencing canonical link and matching `og:url` to the HTML head.
- [ ] Add a real sharing image, absolute image URL and descriptive `og:image:alt`; test the resulting preview.
- [ ] Create `public/sitemap.xml` containing only canonical, indexable page URLs (not section anchors); add its full URL to `public/robots.txt`. Do not invent update dates.
- [ ] Add the most appropriate LocalBusiness JSON-LD subtype using only accurate facts visible on the page. Validate with Google's Rich Results Test / Schema.org validator; markup does not guarantee a rich result.
- [ ] Remove the prototype noindex meta tag only after launch approval. Check for additional Netlify `X-Robots-Tag` headers or other indexing restrictions. Keep staging/demo deployments noindex.
- [ ] Update the prototype assertions in `scripts/check-seo.mjs` for indexable production HTML, the real canonical, sitemap and structured data.
- [ ] Check HTTPS, redirects, broken links, 404 responses, mobile layout, keyboard access and production performance.
- [ ] Verify Search Console, inspect the canonical URL and submit the sitemap. Indexing is not guaranteed or immediate.
- [ ] With client authorization, create/update an eligible Google Business Profile and keep business details consistent. Ask for genuine reviews, never fabricated ones.
- [ ] Record a baseline and review impressions, clicks and enquiries over time. Add analytics only if needed and address applicable privacy/consent obligations.

Sell technical quality and an honest improvement process, not guaranteed Google positions. A Lighthouse SEO score is a checklist, not a ranking forecast.
