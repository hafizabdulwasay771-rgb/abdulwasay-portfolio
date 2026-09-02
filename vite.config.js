import { defineConfig } from 'vite';

export default defineConfig({
  base: '/abdulwasay-portfolio/',
  plugins: [
    {
      name: 'inject-mobile-responsive-css',
      transformIndexHtml(html) {
        return html.replace(
          '</head>',
          '  <link rel="stylesheet" href="/abdulwasay-portfolio/mobile-fix.css">\n  </head>'
        );
      },
    },
  ],
});
