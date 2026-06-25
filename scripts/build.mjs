import {mkdirSync, copyFileSync, cpSync} from 'fs';
mkdirSync('dist', {recursive:true});
copyFileSync('index.html','dist/index.html');
cpSync('src','dist/src',{recursive:true});
