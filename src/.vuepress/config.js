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

    '/page/zh/': {
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
            path: '/page/en/guide/',  
            collapsable: false, 
            sidebarDepth: 1,
            children: [
              '/page/en/guide/quickstart',
              '/page/en/guide/installation',
              '/page/en/guide/config',
              '/page/en/guide/options',
            ]
          },
          {
            title: 'Element', 
            path: '/page/en/element/',  
            collapsable: false, 
            sidebarDepth: 1,
            children: [
              '/page/en/element/text',
              '/page/en/element/rect',
              '/page/en/element/circle',
              '/page/en/element/image',
              '/page/en/element/svg',
              '/page/en/element/html',
            ]
          },
          {
            title: 'API', 
            path: '/page/en/api/',  
            collapsable: false, 
            sidebarDepth: 1,
            children: [
              '/page/en/api/set-data',
              '/page/en/api/get-data',
              '/page/en/api/reset-size',
              '/page/en/api/select-element',
              '/page/en/api/select-element-by-index',
              '/page/en/api/update-element',
              '/page/en/api/add-element',
              '/page/en/api/delete-element',
              '/page/en/api/move-up-element',
              '/page/en/api/move-down-element',
              '/page/en/api/scale',
              '/page/en/api/scroll-x',
              '/page/en/api/scroll-y',
              '/page/en/api/event',
            ]
          },
          ['/page/en/advanced-guide', 'Advanced Guide']
        ]
      },
      '/page/zh/': {
        sidebar: [
          ['/page/zh/quickstart', '快速开始'],
          ['/page/zh/element', '元素'],
          ['/page/zh/api', '使用API'],
        ]
      }
    }
  },
}