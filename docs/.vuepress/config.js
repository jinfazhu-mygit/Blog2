const headConf=require('./config/headConf');
const pluginsConf=require('./config/pluginsConf');

module.exports = {
  title:"",
  description:"学习创建个人博客",
  head: headConf,
  plugins: pluginsConf,
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