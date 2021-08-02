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
            path: '/en/guide/',  
            collapsable: false, 
            sidebarDepth: 1,
            children: [
              '/en/guide/introduction',
              '/en/guide/quickstart',
              '/en/guide/installation',
              '/en/guide/config',
              '/en/guide/options',
            ]
          },
          {
            title: 'Element', 
            path: '/en/element/',  
            collapsable: false, 
            sidebarDepth: 1,
            children: [
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
            path: '/en/api/',  
            collapsable: false, 
            sidebarDepth: 1,
            children: [
              '/en/api/set-data',
              '/en/api/get-data',
              '/en/api/reset-size',
              '/en/api/select-element',
              '/en/api/select-element-by-index',
              '/en/api/update-element',
              '/en/api/add-element',
              '/en/api/delete-element',
              '/en/api/move-up-element',
              '/en/api/move-down-element',
              '/en/api/scale',
              '/en/api/scroll-x',
              '/en/api/scroll-y',
              '/en/api/event',
            ]
          },
          ['/en/advanced-guide', 'Advanced Guide']
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
              '/zh/api/update-element',
              '/zh/api/add-element',
              '/zh/api/delete-element',
              '/zh/api/move-up-element',
              '/zh/api/move-down-element',
              '/zh/api/reset-size',
              '/zh/api/scale',
              '/zh/api/scroll-x',
              '/zh/api/scroll-y',
              '/zh/api/event',
            ]
          },
        ]
      }
    }
  },
}