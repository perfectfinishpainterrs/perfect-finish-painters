// One-shot script: rewrites .jpg / .jpeg / logo.png image URL references in src/
// to .webp. Skips SVG, fonts, and any .png that isn't logo.png.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const SRC = new URL('../src/', import.meta.url).pathname.replace(/^\/(\w):/, '$1:');
const EXTS = new Set(['.ts', '.tsx', '.mts']);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (EXTS.has(full.slice(full.lastIndexOf('.')))) out.push(full);
  }
  return out;
}

const rules = [
  [/(["'`])(\/[\w./-]+?)\.jpg(["'`?])/g, '$1$2.webp$3'],
  [/(["'`])(\/[\w./-]+?)\.jpeg(["'`?])/g, '$1$2.webp$3'],
  [/(["'`])(https:\/\/perfectfinishpainter\.com\/[\w./-]+?)\.jpg(["'`?])/g, '$1$2.webp$3'],
  [/(["'`])(https:\/\/perfectfinishpainter\.com\/[\w./-]+?)\.jpeg(["'`?])/g, '$1$2.webp$3'],
  [/(["'`])\/logo\.png(["'`])/g, '$1/logo.webp$2'],
  [/(["'`])https:\/\/perfectfinishpainter\.com\/logo\.png(["'`])/g, '$1https://perfectfinishpainter.com/logo.webp$2'],
];

let touched = 0;
let replacements = 0;
const files = await walk(SRC);

for (const file of files) {
  const before = await readFile(file, 'utf8');
  let after = before;
  for (const [re, to] of rules) {
    const matches = after.match(re);
    if (matches) {
      replacements += matches.length;
      after = after.replace(re, to);
    }
  }
  if (after !== before) {
    await writeFile(file, after, 'utf8');
    touched++;
    console.log(`  ${file.replace(SRC, '')}`);
  }
}

console.log(`\n${touched} files touched, ${replacements} URL replacements, ${files.length} files scanned.`);
