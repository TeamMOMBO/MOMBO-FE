import { useState, useCallback } from 'react';

export const useNotificationPermission = () => {
  const [permission, setPermission] = useState(
    typeof window !== 'undefined' ? Notification.permission : 'default',
  );

  const requestPermission = useCallback(async () => {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      console.warn('This browser does not support notifications.');
      return;
    }
    if (permission !== 'granted') {
      const newPermission = await Notification.requestPermission();
      console.log('Notification permission:', newPermission);
      setPermission(newPermission);
    }
  }, [permission]);

  return { requestPermission };
};
