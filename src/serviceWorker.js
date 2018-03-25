let cacheName = "v2"
let cacheFiles = [
	"./build/vendor.js",
	"./build/app.js",
	
	// "./build/app.css",
]

self.addEventListener("install", event => {
	console.log("service worker installed")
	event.waitUntil(
		caches.open(cacheName).then(cache => {
			console.log("service worker caching")
			return cache.addAll(cacheFiles)
		})
	)
})
self.addEventListener("activate", event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(thisCacheName => {
					if (thisCacheName !== cacheName) {
						console.log("removing chached files")
						return caches.delete(thisCacheName)
					}
				})
			)
		})
	)
})
self.addEventListener("fetch", event => {
	console.log("SW fetch", event.request.url)

	event.respondWith(
		caches.match(event.request).then(response => {
			if (response) {
				console.log(response)
				return response
			}

			return fetch(event.request)
		})
	)
})
