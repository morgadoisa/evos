# Manual de Marca — EVOS

Site estático. React, ReactDOM e Babel vêm do npm e são copiados para `dist/vendor` no build (sem dependência de CDN).

## Local
npm install
npm run build
npm run preview

## Cloudflare Pages (via GitHub)
1. Suba esta pasta para um repositório no GitHub.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: None
4. Build command: npm run build
5. Build output directory: dist
