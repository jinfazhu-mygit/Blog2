const moment = require('moment');
moment.locale("zh-cn")
const secrtct=require('./config/secrect');
const secrect = require('./secrect');

module.exports={
    
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
    clientId: secrect.clientId,
    clientSecret: secrect.clientSecret,
  },
  '@vuepress/back-to-top': true
}