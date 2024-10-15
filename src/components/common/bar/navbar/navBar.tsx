'use client';

import { usePathname } from 'next/navigation';
import UserIcon from '/public/svgs/filled/icon-user.svg';
import HomeIcon from '/public/svgs/filled/icon-home.svg';
import BookIcon from '/public/svgs/filled/icon-book.svg';
import LayersIcon from '/public/svgs/filled/icon-layers.svg';
import ScannerIcon from '/public/svgs/filled/icon-scanner.svg';
import NavBarItem from './navBarItem';
import DropDown from '../../dropdown/dropdown';
import { useToggle } from '<prefix>/hooks/useToggle';
import { useRef, useState } from 'react';

const navItems = [
  { href: '/main', icon: HomeIcon, label: '홈', activePath: 'main' },
  {
    href: '/contents',
    icon: LayersIcon,
    label: '콘텐츠',
    activePath: 'contents',
  },
  {
    href: '/',
    icon: ScannerIcon,
    activePath: 'dictionary',
    isCenter: true,
  },
  { href: '/dictionary', icon: BookIcon, label: '성분사전', activePath: '' },
  { href: '/my', icon: UserIcon, label: '마이페이지', activePath: 'my' },
];

const NavBar = () => {
  const currentPath = usePathname();
  const isActive = (path: string) => currentPath.split('/').pop() === path;

  const [isDropdownOpen, toggleDropdown] = useToggle();
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 카메라 or 이미지 접근 함수
  const handlePhotoClick = () => {
    fileInputRef.current?.click();
    toggleDropdown();
  };

  //앱 내애서 사진 찍어서 등록
  const handleTakePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPhotoSrc(objectUrl);

      const formData = new FormData();
      formData.append('photo', file);

      formData.forEach((value, key) => {
        console.log(`FormData key: ${key}, value:`, value);
      });
    }
  };

  //앨범에서 미리 찍은 사진 등록
  const handleSelectPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPhotoSrc(objectUrl);

      const formData = new FormData();
      formData.append('photo', file);

      formData.forEach((value, key) => {
        console.log(`FormData key: ${key}, value:`, value);
      });
    }
  };

  return (
    <nav className='sticky bottom-0 mt-12 h-58 w-full bg-white px-12 pb-5 pt-11 shadow-[0px_-4px_20px_#a1a1a11a]'>
      <ul className='flex justify-around'>
        {navItems.map((item, index) => {
          if (item.isCenter) {
            return (
              <li key={index} className='flex basis-full justify-center'>
                <button className='absolute bottom-13' onClick={toggleDropdown}>
                  <div className='flex h-57 w-57 items-center justify-center rounded-full border-4 border-solid border-white bg-primary'>
                    <item.icon className='h-24 w-24' />
                  </div>
                </button>
                {isDropdownOpen && (
                  <DropDown handleClose={toggleDropdown}>
                    <DropDown.Menu isOpen={isDropdownOpen}>
                      <DropDown.Item onClick={handlePhotoClick}>
                        사진 촬영하기
                      </DropDown.Item>
                      <DropDown.Item onClick={handlePhotoClick}>
                        사진 업로드하기
                      </DropDown.Item>
                    </DropDown.Menu>
                  </DropDown>
                )}
              </li>
            );
          }
          return (
            <NavBarItem
              key={index}
              href={item.href}
              icon={item.icon}
              label={item.label}
              isActive={isActive(item.activePath)}
            />
          );
        })}
      </ul>
      <input
        type='file'
        accept='image/*'
        capture='environment'
        ref={fileInputRef}
        onChange={handleTakePhoto}
        className='hidden'
      />
      <input
        type='file'
        accept='image/jpg, image/png, image/jpeg, image/bmp, image/tif, image/heic'
        hidden
        ref={fileInputRef}
        onChange={handleSelectPhoto}
      />
      {photoSrc && (
        <div className='mt-5 flex justify-center'>
          <img src={photoSrc} alt='Preview' className='h-32 w-32 rounded-md' />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
