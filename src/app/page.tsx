'use client';

import { useToggle } from '../hooks/useToggle';
import Input from '<prefix>/components/common/input';
import NavBar from '<prefix>/components/common/bar/navBar';
import BackTopBar from '<prefix>/components/common/bar/backTopBar';
import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import LargeButton from '<prefix>/components/common/button/largeButton';
import MiddleButton from '<prefix>/components/common/button/middleButton';
import Modal from '<prefix>/components/common/modal';
import CheckButton from '<prefix>/components/common/button/checkButton';
import { useState } from 'react';

export default function Home() {
  const [isSelected, toggleButton] = useToggle();
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    const sanitizedValue = inputValue.replace(/\s/g, '');
    if (sanitizedValue.length <= 8) {
      setValue(sanitizedValue);
    }
  };
  return (
    <div className='grid w-full h-full place-items-center gap-8'>
      <LargeButton variant='fill' buttonColor='primary'>
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
