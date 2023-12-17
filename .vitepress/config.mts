import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'iDraw.js',
  description: 'A simple JavaScript framework for Drawing on the web.',
  base: '/docs/',
  srcDir: './src/',
  outDir: './docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: './assets/idraw.png'
    },
    i18nRouting: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Playground', link: 'https://idraw.js.org/playground/' }
    ],
    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'introdcution', link: '/en-US/guide/introduction' },
          { text: 'Qick Started', link: '/en-US/guide/quickstart' },
          { text: 'Installation', link: '/en-US/guide/installation' },
          { text: 'Class iDraw', link: '/en-US/guide/class-idraw' }
        ]
      },
      {
        text: 'Element',
        items: [
          { text: 'Basic', link: '/en-US/element/info' },
          { text: 'Text', link: '/en-US/element/text' },
          { text: 'Rect', link: '/en-US/element/rect' },
          { text: 'Circle', link: '/en-US/element/circle' },
          { text: 'Image', link: '/en-US/element/image' },
          { text: 'SVG', link: '/en-US/element/svg' },
          { text: 'HTML', link: '/en-US/element/html' },
          { text: 'Path', link: '/en-US/element/path' },
          { text: 'Group', link: '/en-US/element/group' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'setData', link: '/en-US/api/set-data' },
          { text: 'getData', link: '/en-US/api/get-data' },
          { text: 'selectElement', link: '/en-US/api/select-element' },
          { text: 'addElement', link: '/en-US/api/add-element' },
          { text: 'updateElement', link: '/en-US/api/update-element' },
          { text: 'deleteElement', link: '/en-US/api/delete-element' },
          { text: 'moveElement', link: '/en-US/api/move-element' },
          { text: 'resize', link: '/en-US/api/resize' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/idrawjs/idraw' }]
  },
  locales: {
    // root: {
    //   label: 'English',
    //   lang: 'en-US',
    //   link: '/en-US/'
    // },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      link: '/en-US/'
    },
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      themeConfig: {
        logo: {
          src: './assets/idraw.png'
        },
        nav: [
          { text: '主页', link: '/zh-CN/' },
          { text: '演示', link: 'https://idraw.js.org/playground/' }
        ],

        sidebar: [
          {
            text: '基础',
            items: [
              { text: '介绍', link: '/zh-CN/guide/introduction' },
              { text: '快速开始', link: '/zh-CN/guide/quickstart' },
              { text: '安装', link: '/zh-CN/guide/installation' },
              { text: 'iDraw', link: '/zh-CN/guide/class-idraw' }
            ]
          },
          {
            text: '元素',
            items: [
              { text: 'Basic', link: '/zh-CN/element/info' },
              { text: 'Text', link: '/zh-CN/element/text' },
              { text: 'Rect', link: '/zh-CN/element/rect' },
              { text: 'Circle', link: '/zh-CN/element/circle' },
              { text: 'Image', link: '/zh-CN/element/image' },
              { text: 'SVG', link: '/zh-CN/element/svg' },
              { text: 'HTML', link: '/zh-CN/element/html' },
              { text: 'Path', link: '/zh-CN/element/path' },
              { text: 'Group', link: '/zh-CN/element/group' }
            ]
          },
          {
            text: 'API',
            items: [
              { text: 'setData', link: '/zh-CN/api/set-data' },
              { text: 'getData', link: '/zh-CN/api/get-data' },
              { text: 'selectElement', link: '/zh-CN/api/select-element' },
              { text: 'addElement', link: '/zh-CN/api/add-element' },
              { text: 'updateElement', link: '/zh-CN/api/update-element' },
              { text: 'deleteElement', link: '/zh-CN/api/delete-element' },
              { text: 'moveElement', link: '/zh-CN/api/move-element' },
              { text: 'resize', link: '/zh-CN/api/resize' }
            ]
          }
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/idrawjs/idraw' }]
      }
    }
  }
});
