import fs from 'node:fs';
const required = ['package.json','wrangler.toml','backend/workers/app/src/index.js','README.md'];
const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error('Missing files:', missing.join(', '));
  process.exit(1);
}
console.log('ScamGuard Foundation check passed.');
