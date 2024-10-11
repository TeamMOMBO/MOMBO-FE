import Link from 'next/link';
import LocoIcon from '/public/svgs/icon-logo.svg';
import BellIcon from '/public/svgs/light/icon-bell.svg';
import SearchIcon from '/public/svgs/light/icon-search.svg';

type IconProps = {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

interface MainTopBarProps {
  logoHref?: string;
  icons?: IconProps[];
}

const MainTopBar = ({
  logoHref = '/main',
  icons = [
    {
      href: '/search',
      icon: SearchIcon,
      className: 'h-24 w-24 stroke-neutral-600',
    },
    {
      href: '/notification_',
      icon: BellIcon,
      className: 'h-24 w-24',
    },
  ],
}: MainTopBarProps) => {
  return (
    <div className='flex h-58 w-full items-center justify-between px-16 py-9'>
      <Link href={logoHref}>
        <LocoIcon className='h-19 w-103 fill-primary' />
      </Link>
      <div className='flex items-center gap-4'>
        {icons.map(({ href, icon: Icon, className }, index) => (
          <Link
            key={index}
            href={href}
            className='flex h-40 w-40 items-center justify-center'
          >
            <Icon className={className} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainTopBar;
