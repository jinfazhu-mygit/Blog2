/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "111.html",
    "revision": "8f5a50d675144ee0179955f083cc14b7"
  },
  {
    "url": "404.html",
    "revision": "071f1f0e1c1a897b03b1b4653fc7b1d6"
  },
  {
    "url": "about/index.html",
    "revision": "153dabb48049c528c93d8fd925220c26"
  },
  {
    "url": "assets/css/0.styles.e42cd381.css",
    "revision": "66605f12555218a8ee225e3adbd963e6"
  },
  {
    "url": "assets/img/github.png",
    "revision": "72b04f175d96fcc48feb2dd8cae6ed04"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6534f1ec.js",
    "revision": "a607bda87475e82d0f4efdb0331c0534"
  },
  {
    "url": "assets/js/11.2debd1fa.js",
    "revision": "04cccc35b3808a4d98c0bb8748eae1c7"
  },
  {
    "url": "assets/js/12.472c5d84.js",
    "revision": "9b0740b4d84efd9f33f76f3c6ad3027d"
  },
  {
    "url": "assets/js/13.5cf8ad63.js",
    "revision": "342539dcb214d0c6b8c81dd02a20b377"
  },
  {
    "url": "assets/js/2.169eb508.js",
    "revision": "fada332a7577b9011c0e32470ef062fd"
  },
  {
    "url": "assets/js/3.6ea4a6c7.js",
    "revision": "5a337a4734df858eb96b211657ecec70"
  },
  {
    "url": "assets/js/4.34d090a1.js",
    "revision": "ac1976e59e229bae89e8745c241ffac1"
  },
  {
    "url": "assets/js/5.f3437639.js",
    "revision": "dc3185d34d565bcc8765ba8aa4252283"
  },
  {
    "url": "assets/js/6.8b6221bd.js",
    "revision": "499d4be1a009e906614e7123d9cef3d9"
  },
  {
    "url": "assets/js/7.18df681b.js",
    "revision": "d967a33617180fcf035f48f956664afa"
  },
  {
    "url": "assets/js/8.abe9aa4a.js",
    "revision": "9a2f161aff74c3f71f0475751ddde7ce"
  },
  {
    "url": "assets/js/9.67e42d91.js",
    "revision": "d6021cd61508ca2492f6d03885e8a72a"
  },
  {
    "url": "assets/js/app.f6621aad.js",
    "revision": "26672a632b70b6746a7f2e82f54ca545"
  },
  {
    "url": "category/index.html",
    "revision": "3054b08ea50f699df71931d04aa8acf1"
  },
  {
    "url": "index.html",
    "revision": "8e8ca3794cd9d0154179feb96158dee8"
  },
  {
    "url": "quanxue.html",
    "revision": "84bbeabf99d170b9afa63535acebb8a4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
