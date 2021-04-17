module.exports = {
  plugins: {
    '@vuepress/last-updated': true
  },
  title:"",
  description:"学习创建个人博客",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '朱金发' }],
    ['meta', { name: 'vuepress', content: 'Hello Vuepress!' }],
  ],
  themeConfig: {
    lastUpdated: 'Last Updated', 
    logo: '/assets/img/github.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/category/' },
      { text: '关于我', link: '/about/' },
    ],
    sidebar: [
      '/',
      '/about',
      ['/category']
    ]
  }
}