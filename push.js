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
  "endpoint": "https://fcm.googleapis.com/fcm/send/cEaNtP2Gqdc:APA91bGvKvYlvUdiN1i2U6ytkCqJI1Z71bw_jrxt0O7EslGhYv_uffQMisQynbEuMrEeq8EnMGmxnTT02Ak085n4OQZoXr6IaDAuw8O_Wv0nWyE1uS6HSgumyToLyLYN6kQOn5bkJkdF",
  "keys": {
    "p256dh": "BEQSMNi+SPnDsg14tH1q94pEq0b3yaomeYpvDzynWs2e7TIc9FJFbCuoGD80sr9vcrWVPa5HayYxIEW59obGACM=",
    "auth": "Snc1jZDgRk8LhqCxMcpZTw=="
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