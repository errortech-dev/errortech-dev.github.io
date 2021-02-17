const workbox = require("workbox-build");

workbox.generateSW({
	cacheId:"navkar_git",
	blodDirectory:"./".
	globPatterns:[
		"**/*.{css|js}"
	],
	swDest:"./sw.js",
	runtimeCaching: [{
		urlpattern:/\.(?:html|htm|xml)$/,
		handler:"staleWhileReavalidate",
		options:{
			cacheName:"markup",
			expiration:{
				maxAgeSeconds:1800
			}
		}
	}]
});