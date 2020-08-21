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
    revision: '66'
  },
  {
    url: "/favicon.ico",
    revision: '66'
  },
  {
    url: "/css/materialize.min.css",
    revision: '66'
  },
  {
    url: "/index.html",
    revision: '66'
  },
  {
    url: "/pages/tables.html",
    revision: '66'
  },
  {
    url: "/pages/topscorer.html",
    revision: '66'
  },
  {
    url: "/pages/fixtures.html",
    revision: '66'
  },
  {
    url: "/pages/saved.html",
    revision: '66'
  },
  {
    url: "/components/Provider.js",
    revision: '66'
  },
  {
    url: "/components/Standings.js",
    revision: '66'
  },
  {
    url: "/components/TopScorer.js",
    revision: '66'
  },
  {
    url: "/components/Fixtures.js",
    revision: '66'
  },
  {
    url: "/components/SavedMatch.js",
    revision: '66'
  },
  {
    url: "/js/nav.js",
    revision: '66'
  },
  {
    url: "/js/api.js",
    revision: '66'
  },
  {
    url: "/js/db.js",
    revision: '66'
  },
  {
    url: "/js/main.js",
    revision: '66'
  },
  {
    url: "/js/materialize.min.js",
    revision: '66'
  },
  {
    url: "/js/idb.js",
    revision: '66'
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
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  workbox.strategies.staleWhileRevalidate()
);
