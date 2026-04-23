// One-shot script: converts every .jpg/.jpeg/.png in public/ to a .webp sibling
// at quality 82. Originals are left in place as fallbacks. Safe to re-run — skips
// files that already have a .webp sibling newer than the source.
import { readdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import { existsSync } from 'node:fs';
import sharp from 'sharp';

const PUBLIC = new URL('../public/', import.meta.url).pathname.replace(/^\/(\w):/, '$1:');
const QUALITY = 82;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

const files = await walk(PUBLIC);
let converted = 0;
let skipped = 0;
let failed = 0;

for (const src of files) {
  const { dir, name } = parse(src);
  const out = join(dir, `${name}.webp`);
  try {
    if (existsSync(out)) {
      const [s, o] = await Promise.all([stat(src), stat(out)]);
      if (o.mtimeMs >= s.mtimeMs) {
        skipped++;
        continue;
      }
    }
    await sharp(src).webp({ quality: QUALITY }).toFile(out);
    converted++;
    console.log(`  ${src.replace(PUBLIC, '')} -> .webp`);
  } catch (err) {
    failed++;
    console.error(`  FAILED ${src}: ${err.message}`);
  }
}

console.log(`\n${converted} converted, ${skipped} skipped, ${failed} failed (${files.length} total)`);
