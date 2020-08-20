const webPush = require('web-push');

const vapidKeys = {
  "publicKey": "BITNjUumYcvkKEfBxeDlEvxQZkkazXXotEqv7nQd3aVw7yIXtDM-NFdOed68DxvQDzFko0_ibu9Zqg6AL6FQdgU",
  "privateKey": "RWv4fHsCO-josLKJXkkKP87ZvWClHXD11R3DGcc7UlE"
};
webPush.setVapidDetails(
  'mailto:bhrdnn@dicoding.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)
const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/fRN5-mo1kpI:APA91bFfdT--L4FujEzIS23A-sq7YV6sZoT8tRaCXNduNIH_D8Q-z550KJzqWG9WXzH08wj4Z20-fCUUcRfRdNjv8N56x9X9m_iiIYFtsVcy0GTCM0U1d_CgkGPgY-3mpq8_mGLaR95Y",
  "keys": {
    "p256dh": "BAMQH+XEOfOskztFNb2b+xhXRkA7tODBPswZWKFT9XPOsm09zPRf8SkTvRV3PNR+N7lw73PS2ATBVhi2avPJhHY=",
    "auth": "G3x3vooImJMcAs6Ps5aMHw=="
  }
};
const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

const options = {
  gcmAPIKey: '606063650410',
  TTL: 60,
  vapidDetails: {
    subject: 'mailto:bhrdnn@dicoding.com',
    publicKey: vapidKeys.publicKey,
    privateKey: vapidKeys.privateKey
  }
}

webPush.sendNotification(
  pushSubscription,
  payload,
  options
).catch(err => console.log(err));