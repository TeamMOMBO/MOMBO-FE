import { firebaseApp } from '<prefix>/firebase';
import { getMessaging, isSupported, onMessage } from 'firebase/messaging';
import { useCallback, useEffect } from 'react';

export const useForegroundNotification = () => {
  const initializeMessaging = useCallback(async () => {
    try {
      const isSupportedBrowser = await isSupported();
      if (!isSupportedBrowser) return;

      const messaging = getMessaging(firebaseApp);
      onMessage(messaging, (payload) => {
        if (!('Notification' in window)) return;

        const permission = Notification.permission;
        const title = `${payload.notification?.title} foreground`;
        const body = payload.notification?.body;
        const redirectUrl = '/';

        if (permission === 'granted') {
          console.log('Foreground message payload:', payload);
          if (payload.data) {
            const notification = new Notification(title, {
              body,
              icon: '/icons/icon-96.png',
            });
            notification.onclick = () => {
              window.open(redirectUrl, '_blank')?.focus();
            };
          }
        }
      });
    } catch (error) {
      console.error('Error initializing messaging:', error);
    }
  }, []);

  useEffect(() => {
    initializeMessaging();
  }, [initializeMessaging]);
};
