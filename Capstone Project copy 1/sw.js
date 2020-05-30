let cacheName = 'justin-g-pwa';
// let caches;
let filesToCache = [
  '../beer-images/IMG_2445.jpg',
  '../beer-images/IMG_2452.jpg',
  '../beer-images/IMG_2460.jpg',
  '../beer-images/IMG_2464.jpg',
  '../beer-images/IMG_2466.jpg',
  '../beer-images/IMG_2474.jpg',
  '../beer-images/IMG_2479.jpg',
  '../beer-images/IMG_2482.jpg',
  '../beer-images/IMG_2488.jpg',
  '../beer-images/IMG_2493.jpg',
  '../beer-images/IMG_2502.jpg',
  '../beer-images/IMG_2539.jpg',
  '../images/adventure-alps-camp-camping-618848.jpg',
  '../images/author-image.png',
  '../images/beer-factory.svg',
  '../images/cheers-animated.gif',
  '../images/film-craft-beer.JPG',
  '../about/about.html',
  '../about/about-style.css',
  '../beer-collection/beer-collection.html',
  '../beer-collection/beer-collection-style.css',
  '../other-projects/axios.js',
  '../other-projects/otherprojects.html',
  '../other-projects/otherprojects.css',
  '../other-projects/random-brewery-generator.html',
  'other-projects/random-brewery-generator.css',
  '/index.html',
  '/style.css'
]

/* 
start the service worker, when the user access
the website online. This will add the all the files 
listed in filesToCache to the browser cache.

*/
self.addEventListener('install', function(e){
  console.log("on install")
    console.log(cacheName);
  e.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log("Adding files to cache")
      return cache.addAll(filesToCache)
    })
  )
})

/*
If offline or if the file exists in the cache, then it will fetch the files from cache
*/
self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request,{
        cacheName: cacheName
    }).then(function(response){
        console.log("Fetching "+e.request.url);
      return response || fetch (e.request)
    })
  )
})

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});