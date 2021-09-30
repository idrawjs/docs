module.exports = {
  base: '/docs/',
  title: 'iDraw.js',
  description: 'A JavaScript Framework for Drawing on web',
  locales: {
    '/': {
      lang: 'English', 
      title: 'iDraw.js',
      description: 'iDraw.js A simple JavaScript framework for Drawing on the web',
    },
    '/zh/': {
      lang: '中文',
      title: 'iDraw.js',
      description: 'iDraw.js 一个前端画图JavaScript框架',
    },
  },
  themeConfig: {
    nav: [],
    repo: 'idrawjs/idraw',
    docsRepo: 'idrawjs/idraw',
    locales: {
      '/': {
        sidebar: [
          {
            title: 'Essentials', 
            collapsable: false, 
            sidebarDepth: 1,
            children: [
              '/en/guide/introduction',
              '/en/guide/quickstart',
              '/en/guide/installation',
              '/en/guide/class-idraw',
            ]
          },
          {
            title: 'Element', 
            collapsable: false, 
            sidebarDepth: 1,
            children: [
              '/en/element/info',
              '/en/element/text',
              '/en/element/rect',
              '/en/element/circle',
              '/en/element/image',
              '/en/element/svg',
              '/en/element/html',
            ]
          },
          {
            title: 'API', 
            collapsable: false, 
            sidebarDepth: 1,
            children: [
              '/en/api/set-data',
              '/en/api/get-data',
              '/en/api/select-element',
              '/en/api/select-element-by-index',
              '/en/api/get-selected-elements',
              '/en/api/update-element',
              '/en/api/add-element',
              '/en/api/delete-element',
              '/en/api/move-up-element',
              '/en/api/move-down-element',
              '/en/api/insert-element-before',
              '/en/api/insert-element-before-index',
              '/en/api/insert-element-after',
              '/en/api/insert-element-after-index',
              '/en/api/reset-size',
              '/en/api/scale',
              '/en/api/scroll-left',
              '/en/api/scroll-top',
              '/en/api/event',
            ]
          },
        ]
      },
      '/zh/': {
        sidebar: [
          {
            title: '基础', 
            // path: '/zh/guide/',  
            collapsable: false, 
            sidebarDepth: 1,
            children: [
              '/zh/guide/introduction',
              '/zh/guide/quickstart',
              '/zh/guide/installation',
              '/zh/guide/class-idraw',
            ]
          },
          {
            title: '画图元素', 
            // path: '/zh/element/',  
            collapsable: false, 
            sidebarDepth: 1,
            children: [
              '/zh/element/info',
              '/zh/element/text',
              '/zh/element/rect',
              '/zh/element/circle',
              '/zh/element/image',
              '/zh/element/svg',
              '/zh/element/html',
            ]
          },
          {
            title: 'iDraw实例API', 
            // path: '/zh/api/',  
            collapsable: false, 
            sidebarDepth: 1,
            children: [
              '/zh/api/set-data',
              '/zh/api/get-data',
              '/zh/api/select-element',
              '/zh/api/select-element-by-index',
              '/zh/api/get-selected-elements',
              '/zh/api/update-element',
              '/zh/api/add-element',
              '/zh/api/delete-element',
              '/zh/api/move-up-element',
              '/zh/api/move-down-element',
              '/zh/api/insert-element-before',
              '/zh/api/insert-element-before-index',
              '/zh/api/insert-element-after',
              '/zh/api/insert-element-after-index',
              '/zh/api/reset-size',
              '/zh/api/scale',
              '/zh/api/scroll-left',
              '/zh/api/scroll-top',
              '/zh/api/event',
              '/zh/api/export-data-url',
            ]
          },
        ]
      }
    }
  },
}