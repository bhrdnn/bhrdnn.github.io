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

workbox.precaching.precacheAndRoute([{
    url: "tables.html",
    revision: '2'
  },
  {
    url: "/manifest.json",
    revision: '2'
  },
  {
    url: "/favicon.ico",
    revision: '1'
  },
  {
    url: "/css/materialize.min.css",
    revision: '1'
  },
  {
    url: "/index.html",
    revision: '1'
  },
  {
    url: "/components/Provider.js",
    revision: '3'
  },
  {
    url: "/components/Standings.js",
    revision: '3'
  },
  {
    url: "/components/TopScorer.js",
    revision: '3'
  },
  {
    url: "/components/Fixtures.js",
    revision: '3'
  },
  {
    url: "/components/SavedMatch.js",
    revision: '3'
  },
  {
    url: "/js/nav.js",
    revision: '1'
  },
  {
    url: "/js/api.js",
    revision: '2'
  },
  {
    url: "/js/db.js",
    revision: '3'
  },
  {
    url: "/js/main.js",
    revision: '2'
  },
  {
    url: "/js/materialize.min.js",
    revision: '1'
  },
  {
    url: "/js/idb.js",
    revision: '2'
  },
]);

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
    cacheName: 'api'
  })
);