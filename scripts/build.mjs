import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mockState } from '../src/mock/data.js';
import { modules, riskLevels } from '../src/core/models.js';
import { VERSION } from '../src/core/version.js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const appPath = join(root, 'apps/pwa/index.html');
let html = readFileSync(appPath, 'utf8');
const state = { ...mockState, modules, riskLevels, version: VERSION };
html = html.replace('__SCAMGUARD_STATE__', JSON.stringify(state));
mkdirSync(join(root, 'src/generated'), { recursive: true });
writeFileSync(join(root, 'src/generated/app-html.js'), `export const APP_HTML = ${JSON.stringify(html)};\n`);
mkdirSync(join(root, 'dist'), { recursive: true });
writeFileSync(join(root, 'dist/index.html'), html);
console.log('ScamGuard build complete:', VERSION.release, VERSION.codename);
