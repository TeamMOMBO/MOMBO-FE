importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js',
);

const firebaseConfig = {
  apiKey: 'AIzaSyB7nGc5-K2aR39A8ER9bQFh4viTxyHn1k0',
  authDomain: 'mombo-79b2d.firebaseapp.com',
  projectId: 'mombo-79b2d',
  storageBucket: 'mombo-79b2d.appspot.com',
  messagingSenderId: '612645884313',
  appId: '1:612645884313:web:5422131fb6c49ca6f0c308',
  measurementId: 'G-LPZPKDZX2W',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 백그라운드 메시지 수신 시 알림 표시
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title
    ? payload.notification.title + ' (onBackgroundMessage)'
    : 'Default Title';
  const notificationOptions = {
    body: payload.notification?.body || 'Default Body',
    icon: 'https://avatars.githubusercontent.com/u/180538886?s=200&v=4',
    data: {
      redirectUrl: payload.data?.redirectUrl || '/', // 기본 URL 설정
    },
  };

  self.registration.showNotification(title, notificationOptions);
});

// 알림 클릭 이벤트 핸들러
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const redirectUrl = event.notification.data.redirectUrl || '/';

  event.waitUntil(
    clients
      .matchAll({
        type: 'window',
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === redirectUrl && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow(redirectUrl);
        }
      }),
  );
});
