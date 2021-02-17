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
    "url": "3optionfunc.js",
    "revision": "338c67269246ed20ea19bc75aa0f7801"
  },
  {
    "url": "html2pdf.bundle.js",
    "revision": "4f85d6a7fa6987d4bbc14367630ea05d"
  },
  {
    "url": "bootstrap.min.css",
    "revision": "ec3bb52a00e176a7181d454dffaea219"
  },
  {
    "url": "bootstrap.min.js",
    "revision": "c5b5b2fa19bd66ff23211d9f844e0131"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "e3a0da981018d6ba3f4d6cecfc271f39"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "a0ef5cbc090796e44a6b4355e3ff0c4b"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "037f5dc4a5b7f95212874fe1d21cf6db"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "b4922b66c74ac2b2ee5fd1d0b63290df"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "6c169a457d2b737d55b432471a1f8486"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "4476752daeee9aecf2c7478b87f03961"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "08fa6255d8aedcfd3511adb247066abc"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "af6859d8ecd12d6214a266177d5047d8"
  },
  {
    "url": "includesw.js",
    "revision": "c79f9aca0c781db80248971330ddd1e5"
  },
  {
    "url": "index.html",
    "revision": "7bd9cf12982d56bf11c14d9b1fa57d6c"
  },
  {
    "url": "index1.html",
    "revision": "fd76fc75e438a31c33a7f11d26984776"
  },
  {
    "url": "index2.html",
    "revision": "725e516d03f56dd98180cb0a02017c98"
  },
  {
    "url": "jquery-2.2.4.min.js",
    "revision": "2f6b11a7e914718e0290410e85366fe9"
  },
  {
    "url": "offline_bills.html",
    "revision": "50d101dbf92db2bf53c8806266b64420"
  },
  {
    "url": "pdf2.html",
    "revision": "450da6f76d1f4a646cc8b96b2b1d1f5f"
  },
  {
    "url": "reprint1.html",
    "revision": "0f408671b84d6b5b0bca7b4841a67bd3"
  },
  {
    "url": "unnamed.png",
    "revision": "7e711d8ecc9ca875c56d875cb999560b"
  },
  {
    "url": "unsaved.html",
    "revision": "9fb8cce622e2e225046a5781e7d3e657"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
