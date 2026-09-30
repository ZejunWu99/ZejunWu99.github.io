import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const pages=['index','home','research','media','product','cv','blog'];
let checked=0;
for(const name of pages){
 const html=await fs.readFile(`${name}.html`,'utf8');
 assert.match(html,/<html lang="en">/);assert.match(html,/<h1[ >]/);
 for(const [,url] of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
  if(/^(https?:|data:)/.test(url))continue;
  await fs.access(url);checked++;
 }
 if(name!=='index')for(const route of pages.slice(1))assert.ok(html.includes(`href="${route}.html"`),`${name}: missing ${route}`);
 assert.ok(!/href="#"/.test(html),'Empty action');
}
const {publications}=await import('../site-data.js');
assert.equal(publications.filter(p=>p.type==='Journal article').length,2);
assert.equal(publications.filter(p=>p.type==='Conference abstract').length,1);
console.log(`PASS: 7 pages, ${checked} local references, six-page navigation, and publication categories.`);
