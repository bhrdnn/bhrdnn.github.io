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
  "endpoint": "https://fcm.googleapis.com/fcm/send/fM6xeklmDVE:APA91bGoYhSlo3xr7uTEwSI-RokGw1OWDh24ZQh6pz7NqkWJqJQF9J2kVdv7Oe8-M7iZvA2niPjgagL_SU5iUmjTCssSFbumqO2tREai0ggQWLGZ626_Uro9GYuQhiMeQuMPwyCRFW6Y",
  "keys": {
    "p256dh": "BPXUWGYokHR+mKx0W6eQSXvZNJkQkbz6JFoSMdxIyNqIUtTgFt2MiJI/fQ+fVsuI7mnc86vFnPRso1kiB+rSQ2Y=",
    "auth": "bGvscWj/pt2772SYo6IYZw=="
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