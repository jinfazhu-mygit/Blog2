const moment = require('moment');
const headConf=require('docs\.vuepress\config\headConf.js');
const pluginsConf=require('docs\.vuepress\config\pluginsConf.js');
const themeConfigConf=('docs\.vuepress\config\themeConfigConf.js')
moment.locale("zh-cn")

module.exports = {
  title:"",
  description:"学习创建个人博客",
  head: headConf,
  plugins: pluginsConf,
  themeConfig: themeConfigConf
}