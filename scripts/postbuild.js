import fs from 'fs';
import path from 'path';
import { mkdir, cp } from 'fs/promises';

async function run() {
  const root = process.cwd();
  const standalone = path.join(root, '.next', 'standalone');

  if (!fs.existsSync(standalone)) {
    console.error('.next/standalone not found. Run "npm run build" first.');
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const dry = args.includes('--dry-run');

  const copies = [
    { src: path.join(root, 'standalone_app', 'public'), dest: path.join(standalone, 'public') },
    { src: path.join(root, '.next', 'static'), dest: path.join(standalone, '.next', 'static') },
  ];

  for (const { src, dest } of copies) {
    if (!fs.existsSync(src)) {
      console.warn(`Source not found: ${src} — skipping`);
      continue;
    }
    console.log(`${dry ? '[dry] ' : ''}Copying ${src} -> ${dest}`);
    if (!dry) {
      await mkdir(dest, { recursive: true });
      // Use fs.cp when available (Node 16.7+). fall back to recursive copy if needed.
      await cp(src, dest, { recursive: true, force: true });
    }
  }

  if (!dry) console.log('postbuild copy completed.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

