import fs from 'fs';
import path from 'path';
const root = process.cwd();
const dist = path.join(root, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
function copyDir(src, dest){ if(!fs.existsSync(src)) return; fs.mkdirSync(dest,{recursive:true}); for(const item of fs.readdirSync(src)){ const s=path.join(src,item), d=path.join(dest,item); const st=fs.statSync(s); if(st.isDirectory()) copyDir(s,d); else fs.copyFileSync(s,d); }}
copyDir(path.join(root,'public'), dist);
fs.copyFileSync(path.join(root,'src','app.js'), path.join(dist,'app.js'));
console.log('Built ScamGuard Platform v0.3.0 to dist/');
