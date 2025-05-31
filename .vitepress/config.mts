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
    // logo: './assets/idraw.png',
    logo: 'https://idrawjs.com/idraw-logo.png',
    i18nRouting: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Sponsor', link: '/en-US/sponsor' },
      { text: 'Playground', link: 'https://idrawjs.com/playground/' }
    ],
    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Introdcution', link: '/en-US/guide/introduction' },
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
          { text: 'setMode', link: '/en-US/api/set-mode' },
          { text: 'selectElement', link: '/en-US/api/select-element' },
          { text: 'addElement', link: '/en-US/api/add-element' },
          { text: 'modifyElement', link: '/en-US/api/modify-element' },
          { text: 'updateElement', link: '/en-US/api/update-element' },
          { text: 'deleteElement', link: '/en-US/api/delete-element' },
          { text: 'moveElement', link: '/en-US/api/move-element' },
          { text: 'resize', link: '/en-US/api/resize' },
          { text: 'scale', link: '/en-US/api/scale' },
          { text: 'centerContent', link: '/en-US/api/center-content' },
          { text: 'enable/disable', link: '/en-US/api/enable-disable' },
          { text: 'getImageBlobURL', link: '/en-US/api/get-image-blob-url' },
          { text: 'undo/redo', link: '/en-US/api/undo-redo' },
          { text: 'on/off', link: '/en-US/api/on-off' }
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
          { text: '捐赠', link: '/zh-CN/sponsor' },
          { text: '演示', link: 'https://idrawjs.com/playground/' }
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
              { text: 'Basic 元素基础', link: '/zh-CN/element/info' },
              { text: 'Text 文本元素', link: '/zh-CN/element/text' },
              { text: 'Rect 矩形元素', link: '/zh-CN/element/rect' },
              { text: 'Circle 圆形元素', link: '/zh-CN/element/circle' },
              { text: 'Image 图片元素', link: '/zh-CN/element/image' },
              { text: 'SVG 资源元素', link: '/zh-CN/element/svg' },
              { text: 'HTML 资源元素', link: '/zh-CN/element/html' },
              { text: 'Path 路径元素', link: '/zh-CN/element/path' },
              { text: 'Group 组元素', link: '/zh-CN/element/group' }
            ]
          },
          {
            text: 'API',
            items: [
              { text: 'setData 设置数据', link: '/zh-CN/api/set-data' },
              { text: 'getData 读取数据', link: '/zh-CN/api/get-data' },
              { text: 'setMode 设置模式', link: '/zh-CN/api/set-mode' },
              { text: 'selectElement 选择元素', link: '/zh-CN/api/select-element' },
              { text: 'addElement 添加元素', link: '/zh-CN/api/add-element' },
              { text: 'modifyElement 修改元素', link: '/zh-CN/api/modify-element' },
              { text: 'updateElement 更新元素', link: '/zh-CN/api/update-element' },
              { text: 'deleteElement 删除元素', link: '/zh-CN/api/delete-element' },
              { text: 'moveElement 移动元素', link: '/zh-CN/api/move-element' },
              { text: 'resize 重置画布尺寸', link: '/zh-CN/api/resize' },
              { text: 'scale 缩放画布', link: '/zh-CN/api/scale' },
              { text: 'centerContent 内容居中', link: '/zh-CN/api/center-content' },
              { text: 'enable/disable 使用/禁用特性', link: '/zh-CN/api/enable-disable' },
              { text: 'getImageBlobURL 导出图片URL', link: '/zh-CN/api/get-image-blob-url' },
              { text: 'undo/redo 撤销/重做', link: '/zh-CN/api/undo-redo' },
              { text: 'on/off 注册/取消事件', link: '/zh-CN/api/on-off' }
            ]
          }
        ],
        socialLinks: [{ icon: 'github', link: 'https://github.com/idrawjs/idraw' }]
      }
    }
  }
});
