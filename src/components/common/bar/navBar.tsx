'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import UserIcon from '/public/svgs/filled/icon-user.svg';
import HomeIcon from '/public/svgs/filled/icon-home.svg';
import BookIcon from '/public/svgs/filled/icon-book.svg';
import LayersIcon from '/public/svgs/filled/icon-layers.svg';
import ScannerIcon from '/public/svgs/filled/icon-scanner.svg';

const NavBar = () => {
  const currentPath = usePathname();
  const isActive = (path: string) => currentPath.split('/').pop() === path;
  return (
    <nav
      className={`sticky bottom-0 h-58 w-full bg-white px-12 pb-5 pt-11 shadow-[0px_-4px_20px_#a1a1a11a]`}
    >
      <ul className='flex justify-around'>
        <li className='basis-full'>
          <Link className='flex flex-col items-center gap-7' href='/main'>
            <HomeIcon
              className={`h-24 w-24 ${isActive('main') ? 'fill-primary stroke-primary' : 'fill-neutral-400 stroke-neutral-400'}`}
            />
            <span
              className={`relative text-11 font-medium leading-[120%] ${isActive('home') ? 'text-primary' : 'text-neutral-500'}`}
            >
              홈
            </span>
          </Link>
        </li>
        <li className='basis-full'>
          <Link className='flex flex-col items-center gap-7' href='/contents'>
            <LayersIcon
              className={`h-24 w-24 ${isActive('contents') ? 'fill-primary stroke-primary' : 'fill-neutral-400 stroke-neutral-400'}`}
            />
            <span
              className={`relative text-11 font-medium leading-[120%] ${isActive('contents') ? 'text-primary' : 'text-neutral-500'}`}
            >
              콘텐츠
            </span>
          </Link>
        </li>
        <li className='flex basis-full justify-center'>
          <Link className='absolute bottom-13' href='/dictionary'>
            <div className='flex h-57 w-57 items-center justify-center rounded-full border-4 border-solid border-white bg-primary'>
              <ScannerIcon className='h-24 w-24' />
            </div>
          </Link>
        </li>
        <li className='relative basis-full'>
          <Link className='flex flex-col items-center gap-7' href='/'>
            <BookIcon
              className={`h-24 w-24 ${isActive('dictionary') ? 'fill-primary stroke-primary' : 'fill-neutral-400 stroke-neutral-400'}`}
            />
            <span
              className={`relative text-11 font-medium leading-[120%] ${isActive('dictionary') ? 'text-primary' : 'text-neutral-500'}`}
            >
              성분사전
            </span>
          </Link>
        </li>
        <li className='basis-full'>
          <Link className='flex flex-col items-center gap-7' href='/my'>
            <UserIcon
              className={`h-24 w-24 ${isActive('my') ? 'fill-primary stroke-primary' : 'fill-neutral-400 stroke-neutral-400'}`}
            />
            <span
              className={`relative text-11 font-medium leading-[120%] ${isActive('my') ? 'text-primary' : 'text-neutral-500'}`}
            >
              마이페이지
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
