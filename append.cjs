const fs = require('fs');
let css = fs.readFileSync('public/fonts/fonts.css', 'utf8');
css = css.replace(/format\('truetype'\)/g, "format('woff2')");
fs.appendFileSync('src/index.css', '\n/* Google Fonts Self-Hosted */\n' + css);
console.log('Appended to index.css');
