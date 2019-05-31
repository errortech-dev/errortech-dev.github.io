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
    "url": "edit.html",
    "revision": "9a8a8321d257dfd88ff5280721ae2179"
  },
  {
    "url": "html2pdf.bundle.js",
    "revision": "4f85d6a7fa6987d4bbc14367630ea05d"
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
    "url": "manifest.json",
    "revision": "2271e892ba7fc8636c9a851ddb6ba614"
  },
  {
    "url": "offline_bills.html",
    "revision": "50d101dbf92db2bf53c8806266b64420"
  },
  {
    "url": "pdf1.html",
    "revision": "450da6f76d1f4a646cc8b96b2b1d1f5f"
  },
  {
    "url": "practice.js",
    "revision": "0d2022f698467ce471961ce8c93ac3eb"
  },
  {
    "url": "reprint.html",
    "revision": "0f408671b84d6b5b0bca7b4841a67bd3"
  },
  {
    "url": "unsaved.html",
    "revision": "9fb8cce622e2e225046a5781e7d3e657"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
