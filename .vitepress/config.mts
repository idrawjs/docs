import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iDraw.js",
  description: "A simple JavaScript framework for Drawing on the web.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/src/assets/idraw.png'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/markdown-examples' },
      { text: 'Playground', link: '/playground' }
    ],

    sidebar: [
      {
        text: 'Essentials',
        items: [
          { text: 'Introcution', link: '/markdown-examples' },
          { text: 'Qick Started', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/idrawjs/idraw' }
    ]
  }
})
