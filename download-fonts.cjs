const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = './public/fonts';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const get = (u) => new Promise((r, j) => 
  https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => r(d));
  }).on('error', j)
);

const dl = (u, d) => new Promise((r, j) => {
  const f = fs.createWriteStream(d);
  https.get(u, (res) => {
    res.pipe(f);
    f.on('finish', () => f.close(r));
  }).on('error', e => {
    fs.unlink(d, () => j(e));
  });
});

(async () => {
  let css = await get('https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
  let i = 0;
  
  const promises = [];
  css = css.replace(/url\((https:\/\/[^)]+)\)/g, (m, p1) => {
    i++;
    // Extract the original font filename to preserve formatting if needed, or just use font-N.woff2
    const filename = `font-${i}.woff2`;
    const filepath = path.join(dir, filename);
    promises.push(dl(p1, filepath));
    return `url('/fonts/${filename}')`;
  });
  
  await Promise.all(promises);
  fs.writeFileSync('./public/fonts/fonts.css', css);
  console.log(`Done downloading ${i} fonts and fonts.css`);
})();
