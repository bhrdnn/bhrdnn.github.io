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

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
  console.log(`Workbox berhasil dimuat`);

workbox.precaching.precacheAndRoute([
  {
    url: "/manifest.json",
    revision: '87'
  },
  {
    url: "/favicon.ico",
    revision: '87'
  },
  {
    url: "/css/materialize.min.css",
    revision: '87'
  },
  {
    url: "/index.html",
    revision: '87'
  },
  {
    url: "/components/Provider.js",
    revision: '87'
  },
  {
    url: "/components/Standings.js",
    revision: '87'
  },
  {
    url: "/components/TopScorer.js",
    revision: '87'
  },
  {
    url: "/components/Fixtures.js",
    revision: '87'
  },
  {
    url: "/components/SavedMatch.js",
    revision: '87'
  },
  {
    url: "/js/nav.js",
    revision: '87'
  },
  {
    url: "/js/api.js",
    revision: '87'
  },
  {
    url: "/js/db.js",
    revision: '87'
  },
  {
    url: "/js/main.js",
    revision: '87'
  },
  {
    url: "/js/materialize.min.js",
    revision: '87'
  },
  {
    url: "/js/idb.js",
    revision: '87'
  },
], {
  // Ignore all URL parameters.
  ignoreUrlParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('/pages/'),
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  workbox.strategies.networkFirst({
    cacheName: 'football-data'
  })
);