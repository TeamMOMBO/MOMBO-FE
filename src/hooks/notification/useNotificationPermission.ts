import { useState, useCallback, useEffect } from 'react';

export const useNotificationPermission = () => {
  const [permission, setPermission] = useState(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      return Notification.permission;
    }
    return 'default';
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('Notification' in window)) {
      console.warn('This browser does not support notifications.');
    }
  }, []);

  const requestPermission = useCallback(async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (permission !== 'granted') {
        const newPermission = await Notification.requestPermission();
        console.log('Notification permission:', newPermission);
        setPermission(newPermission);
      }
    }
  }, [permission]);

  return { permission, requestPermission };
};
