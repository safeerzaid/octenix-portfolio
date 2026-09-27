import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Custom plugin to inline CSS and load it asynchronously
const inlineCriticalCSS = () => {
  return {
    name: 'inline-critical-css',
    enforce: 'post',
    generateBundle(options, bundle) {
      const cssAsset = Object.keys(bundle).find(key => key.endsWith('.css'));
      const htmlAsset = Object.keys(bundle).find(key => key.endsWith('.html'));
      
      if (cssAsset && htmlAsset) {
        const cssContent = bundle[cssAsset].source;
        let htmlContent = bundle[htmlAsset].source;
        
        // 1. Inline the entire CSS bundle (acts as critical CSS since it's small enough ~7kb gzipped)
        htmlContent = htmlContent.replace(
          '</head>',
          `\n    <style>${cssContent}</style>\n  </head>`
        );
        
        // Find the Anton font asset and inject a preload link
        const antonFontAsset = Object.keys(bundle).find(key => key.includes('anton') && key.endsWith('.woff2'));
        if (antonFontAsset) {
          htmlContent = htmlContent.replace(
            '</head>',
            `\n    <link rel="preload" href="/${antonFontAsset}" as="font" type="font/woff2" crossorigin>\n  </head>`
          );
        }
        
        // 2. Convert the synchronous stylesheet link to asynchronous preload + onload
        const linkRegex = new RegExp(`(<link[^>]+href="[^"]*${cssAsset}"[^>]*>)`, 'g');
        htmlContent = htmlContent.replace(linkRegex, (match) => {
          // Extract the href
          const hrefMatch = match.match(/href="([^"]+)"/);
          if (hrefMatch) {
            const href = hrefMatch[1];
            return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" href="${href}"></noscript>`;
          }
          return match;
        });
        
        bundle[htmlAsset].source = htmlContent;
      }
    }
  };
};

export default defineConfig({
  plugins: [react(), inlineCriticalCSS()],
})
