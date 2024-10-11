import { usePathname } from 'next/navigation';
import Link from 'next/link';
import UserIcon from '/public/svgs/filled/icon-user.svg';
import HomeIcon from '/public/svgs/filled/icon-home.svg';
import BookIcon from '/public/svgs/filled/icon-book.svg';
import LayersIcon from '/public/svgs/filled/icon-layers.svg';
import ScannerIcon from '/public/svgs/filled/icon-scanner.svg';
import NavBarItem from './navBarItem';

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

  return (
    <nav className='sticky bottom-0 mt-12 h-58 w-full bg-white px-12 pb-5 pt-11 shadow-[0px_-4px_20px_#a1a1a11a]'>
      <ul className='flex justify-around'>
        {navItems.map((item, index) => {
          if (item.isCenter) {
            return (
              <li key={index} className='flex basis-full justify-center'>
                <Link className='absolute bottom-13' href={item.href}>
                  <div className='flex h-57 w-57 items-center justify-center rounded-full border-4 border-solid border-white bg-primary'>
                    <item.icon className='h-24 w-24' />
                  </div>
                </Link>
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
    </nav>
  );
};

export default NavBar;
