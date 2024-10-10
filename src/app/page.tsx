'use client';
import { getMessaging, onMessage, isSupported } from 'firebase/messaging';
import { useToggle } from '../hooks/useToggle';
import Input from '<prefix>/components/common/input';
import NavBar from '<prefix>/components/common/bar/navBar';
import BackTopBar from '<prefix>/components/common/bar/backTopBar';
import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import LargeButton from '<prefix>/components/common/button/largeButton';
import MiddleButton from '<prefix>/components/common/button/middleButton';
import Modal from '<prefix>/components/common/modal';
import CheckButton from '<prefix>/components/common/button/checkButton';
import { useEffect, useState } from 'react';
import { firebaseApp } from '<prefix>/firebase';

const messaging = async () => {
  try {
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      return getMessaging(firebaseApp);
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default function Home() {
  const [isSelected, toggleButton] = useToggle();
  const [value, setValue] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const requestPermission = async () => {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications.');
      return;
    }
    const permission = Notification.permission;
    if (permission === 'granted') {
      return;
    } else {
      Notification.requestPermission().then((permission) => {
        console.log('permission', permission);
      });
      return;
    }
  };

  /* 포그라운드 푸시 알림 */
  useEffect(() => {
    const onMessageListener = async () => {
      const messagingResolve = await messaging();
      if (messagingResolve) {
        onMessage(messagingResolve, (payload) => {
          if (!('Notification' in window)) {
            return;
          }
          const permission = Notification.permission;
          const title = payload.notification?.title + ' foreground';
          const redirectUrl = '/';
          const body = payload.notification?.body;
          if (permission === 'granted') {
            console.log('payload', payload);
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
      }
    };
    onMessageListener();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    const sanitizedValue = inputValue.replace(/\s/g, '');
    if (sanitizedValue.length <= 8) {
      setValue(sanitizedValue);
    }
  };
  return (
    <div className='grid h-full w-full place-items-center gap-8'>
      <LargeButton
        variant='fill'
        buttonColor='primary'
        onClick={requestPermission}
      >
        primary
      </LargeButton>
      <LargeButton variant='fill' buttonColor='primary-dark'>
        primary-dark
      </LargeButton>
      <LargeButton variant='outline'>outline</LargeButton>
      <MiddleButton variant='fill' buttonColor='primary'>
        primary
      </MiddleButton>
      <MiddleButton variant='fill' buttonColor='primary-dark'>
        primary-dark
      </MiddleButton>
      <MiddleButton variant='outline'>outline</MiddleButton>
      <Modal />
      <MainTopBar />
      <BackTopBar title='Top App Bar' />
      <Input
        maxLength={8}
        onChange={handleInputChange}
        placeholder='placeholder'
      />
      <Input
        value={value}
        maxLength={8}
        placeholder='placeholder'
        errorMessage='error message'
        onChange={handleInputChange}
      />
      <Input
        value={value}
        maxLength={8}
        placeholder='placeholder'
        enableMessage='enable message'
        onChange={handleInputChange}
      />
      <CheckButton isSelected={isSelected} onClick={toggleButton} />
      <NavBar />
    </div>
  );
}
