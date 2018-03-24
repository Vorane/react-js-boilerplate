let cacheName = "v1"
let cacheFiles = ["./build/vendor.js"]

self.addEventListener("install", event => {
	// event.waitUntil(
	// 	caches.open(cacheName).then(cache => {
	// 		return cache.addAll(cacheFiles)
	// 	})
	// )
	// console.log(caches)
})
self.addEventListener("activate", event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(thisCacheName => {
					if (thisCacheName !== cacheName) {
						// console.log("removing chached files")
					}
				})
			)
		})
	)
})
self.addEventListener("fetch", e => {
	// console.log("SW fetch", e.request.url)
})
