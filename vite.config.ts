import { defineConfig, Plugin } from 'vite'

import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      // template: 'public/index.html',
    }),
  ],
})