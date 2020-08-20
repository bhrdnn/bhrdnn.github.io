self.addEventListener('push', function (event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Tidak ada Pesan';
  }
  var options = {
    body: body,
    icon: 'img/icons/icon.png',
  }
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');

if (workbox)
  console.log(`Workbox berhasil dimuat`);

workbox.precaching.precacheAndRoute([
  {
    url: "/manifest.json",
    revision: '21'
  },
  {
    url: "/favicon.ico",
    revision: '21'
  },
  {
    url: "/css/materialize.min.css",
    revision: '21'
  },
  {
    url: "/index.html",
    revision: '21'
  },
  {
    url: "/pages/tables.html",
    revision: '21'
  },
  {
    url: "/pages/topscorer.html",
    revision: '21'
  },
  {
    url: "/pages/fixtures.html",
    revision: '21'
  },
  {
    url: "/pages/saved.html",
    revision: '21'
  },
  {
    url: "/components/Provider.js",
    revision: '21'
  },
  {
    url: "/components/Standings.js",
    revision: '21'
  },
  {
    url: "/components/TopScorer.js",
    revision: '21'
  },
  {
    url: "/components/Fixtures.js",
    revision: '21'
  },
  {
    url: "/components/SavedMatch.js",
    revision: '21'
  },
  {
    url: "/js/nav.js",
    revision: '21'
  },
  {
    url: "/js/api.js",
    revision: '23'
  },
  {
    url: "/js/db.js",
    revision: '21'
  },
  {
    url: "/js/main.js",
    revision: '22'
  },
  {
    url: "/js/materialize.min.js",
    revision: '21'
  },
  {
    url: "/js/idb.js",
    revision: '21'
  },
], {
  // Ignore all URL parameters.
  ignoreURLParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
 new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  ({url}) => url.origin === 'https://api.football-data.org',
  new workbox.strategies.CacheFirst({
    cacheName: 'api-data',
    plugins: [
      new workbox.cacheableResponse.CacheableResponse(({
        statuses: [0, 200, 404],
        headers: {
          'Access-Control-Expose-Headers': 'X-Is-Cacheable',
          'X-Is-Cacheable': 'yes'
        }
      }))
    ]
  })
);