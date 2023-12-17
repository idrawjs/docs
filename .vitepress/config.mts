import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iDraw.js",
  description: "A simple JavaScript framework for Drawing on the web.",
  base: '/docs/',
  srcDir: './src/',
  outDir: './docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: './assets/idraw.png'
    },
    nav: [
      { text: 'Home', link: '/' }, 
      { text: 'Playground', link: 'https://idraw.js.org/playground/' }
    ],
    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'introdcution', link: '/en/guide/introduction' },
          { text: 'Qick Started', link: '/en/guide/quickstart' },
          { text: 'Installation', link: '/en/guide/installation' },
          { text: 'Class iDraw', link: '/en/guide/class-idraw' }
        ]
      },
      {
        text: 'Element',
        items: [
          { text: 'Basic', link: '/en/element/info' }, 
          { text: 'Text', link: '/en/element/text' }, 
          { text: 'Rect', link: '/en/element/rect' }, 
          { text: 'Circle', link: '/en/element/circle' }, 
          { text: 'Image', link: '/en/element/image' }, 
          { text: 'SVG', link: '/en/element/svg' }, 
          { text: 'HTML', link: '/en/element/html' }, 
          { text: 'Path', link: '/en/element/path' }, 
          { text: 'Group', link: '/en/element/group' }, 
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'setData', link: '/en/api/set-data' },
          { text: 'getData', link: '/en/api/get-data' },
          { text: 'selectElement', link: '/en/api/select-element' },
          { text: 'addElement', link: '/en/api/add-element' },
          { text: 'updateElement', link: '/en/api/update-element' },
          { text: 'deleteElement', link: '/en/api/delete-element' },
          { text: 'moveElement', link: '/en/api/move-element' },
          { text: 'resize', link: '/en/api/resize' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/idrawjs/idraw' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: {
          src: './assets/idraw.png'
        },
        nav: [
          { text: '主页', link: '/' }, 
          { text: '演示', link: 'https://idraw.js.org/playground/' }
        ],
    
        sidebar: [
          {
            text: '基础',
            items: [
              { text: '介绍', link: '/zh/guide/introduction' },
              { text: '快速开始', link: '/zh/guide/quickstart' },
              { text: '安装', link: '/zh/guide/installation' },
              { text: 'iDraw', link: '/zh/guide/class-idraw' }
            ]
          },
          {
            text: '元素',
            items: [
              { text: 'Basic', link: '/zh/element/info' }, 
              { text: 'Text', link: '/zh/element/text' }, 
              { text: 'Rect', link: '/zh/element/rect' }, 
              { text: 'Circle', link: '/zh/element/circle' }, 
              { text: 'Image', link: '/zh/element/image' }, 
              { text: 'SVG', link: '/zh/element/svg' }, 
              { text: 'HTML', link: '/zh/element/html' }, 
              { text: 'Path', link: '/zh/element/path' }, 
              { text: 'Group', link: '/zh/element/group' }, 
            ]
          },
          {
            text: 'API',
            items: [
              { text: 'setData', link: '/zh/api/set-data' },
              { text: 'getData', link: '/zh/api/get-data' },
              { text: 'selectElement', link: '/zh/api/select-element' },
              { text: 'addElement', link: '/zh/api/add-element' },
              { text: 'updateElement', link: '/zh/api/update-element' },
              { text: 'deleteElement', link: '/zh/api/delete-element' },
              { text: 'moveElement', link: '/zh/api/move-element' },
              { text: 'resize', link: '/zh/api/resize' },
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/idrawjs/idraw' }
        ]
      }
    }
  }
})
