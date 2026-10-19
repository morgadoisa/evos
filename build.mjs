import { cpSync, rmSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
cpSync('public', 'dist', { recursive: true });
mkdirSync('dist/vendor', { recursive: true });
const vendor = {
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js': ['node_modules/react/umd/react.production.min.js', 'react.production.min.js'],
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js': ['node_modules/react-dom/umd/react-dom.production.min.js', 'react-dom.production.min.js'],
  'https://unpkg.com/@babel/standalone@7.29.0/babel.min.js': ['node_modules/@babel/standalone/babel.min.js', 'babel.min.js'],
};
let support = readFileSync('dist/support.js', 'utf8');
for (const [url, [src, name]] of Object.entries(vendor)) {
  cpSync(src, 'dist/vendor/' + name);
  support = support.split(url).join('./vendor/' + name);
}
writeFileSync('dist/support.js', support);
console.log('Build ok -> dist/');
