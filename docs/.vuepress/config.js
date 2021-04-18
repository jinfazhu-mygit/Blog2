const moment = require('moment');
moment.locale("zh-cn")

module.exports = {
  title:"",
  description:"学习创建个人博客",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '朱金发' }],
    ['meta', { name: 'vuepress', content: 'Hello Vuepress!' }],
  ],
  plugins: {
    
      '@vuepress/last-updated':
      {
        transformer: (timestamp) => {
          return moment(timestamp).format("LLLL")
        }
      },
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: "新的内容出现",
          buttonText: "捕捉！"
        }
      },
      '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
  
        // 其他的 Vssue 配置
        owner: 'jinfazhu-mygit',
        repo: 'Blog2',
        clientId: '764464c6f8a6deafe7e6',
        clientSecret: 'f10a93e064f969fb589b4d7b7aa2ea46fadb583d',
      },
  },
  themeConfig: {
    lastUpdated: '最后更新', 
    logo: '/assets/img/github.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/category/' },
      { text: '关于我', link: '/about/' },
    ],
    sidebar: 'auto'
  }
}