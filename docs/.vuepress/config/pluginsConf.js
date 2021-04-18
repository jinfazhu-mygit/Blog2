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
    clientId: '764464c6f8a6deafe7e6',
    clientSecret: 'f10a93e064f969fb589b4d7b7aa2ea46fadb583d',
  },
  '@vuepress/back-to-top': true
}