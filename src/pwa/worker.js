//workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
//importScripts('~/node_modules/workbox-sw/build/workbox-sw.js')
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([])

const worker = {
  install (registration) {
    console.log('Service worker is installed.')
  },
  ready (registration) {
    console.log('Service worker is active.')
  },
  registered (registration) {
    console.log('Service worker has been registered.')
  },
  cached (registration) {
    console.log('Content has been cached for offline use.')
  },
  updatefound (registration) {
    console.log('New content is downloading.')
  },
  updated (registration) {
    console.log('New content is available; please refresh.')
  },
  activate (event) {
    console.log('activate, clearing cache')
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            // Return true if you want to remove this cache,
            // but remember that caches are shared across
            // the whole origin
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  },
  offline () {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error (error) {
    console.error('Error during service worker registration:', error)
  },
  fetch (event) {
    // console.log('fetch')
    // console.log(event)
  }
}
console.log('registering custom worker')

for (var prop in worker) {
  // skip loop if the property is from prototype
  if(!worker.hasOwnProperty(prop)) continue;
  self.addEventListener(prop, worker[prop])
}
