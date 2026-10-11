import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// Lightweight regression checks, not a crawler, HTML validator or ranking test.
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const robots = await readFile(new URL('../dist/robots.txt', import.meta.url), 'utf8');
const checks = [
  ['Swedish document language', /<html\s+lang="sv"/.test(html)],
  ['Mobile viewport', /<meta name="viewport" content="width=device-width, initial-scale=1\.0"/.test(html)],
  ['Descriptive demo title', /<title>[^<]*Massage[^<]*demo<\/title>/.test(html)],
  ['Description', /<meta name="description" content="[^"]{50,}"/.test(html)],
  ['Prototype excluded from indexing', /<meta name="robots" content="noindex, follow"/.test(html)],
  ['Social sharing metadata', ['og:type', 'og:locale', 'og:site_name', 'og:title', 'og:description'].every(key => html.includes(`property="${key}"`))],
  ['Exactly one primary heading', (html.match(/<h1\b/g) ?? []).length === 1],
  ['Main landmark', /<main\b/.test(html)],
  ['Crawler access allowed', /^Allow: \/\s*$/m.test(robots) && !/^Disallow:\s*\/\s*$/m.test(robots)],
  ['No invented canonical or business schema', !/rel="canonical"|application\/ld\+json/.test(html)],
];
for (const [label, passed] of checks) {
  assert.ok(passed, label);
  console.log(`PASS: ${label}`);
}
console.log('Prototype SEO checks passed. Browser and deployed-site checks remain manual.');
