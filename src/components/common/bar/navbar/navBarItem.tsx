'use client';
import Link from 'next/link';
import clsx from 'clsx';

interface NavBarItemProps {
  href: string;
  label?: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  isActive: boolean;
}

const NavBarItem = ({ href, label, icon: Icon, isActive }: NavBarItemProps) => {
  return (
    <li className='basis-full'>
      <Link className='flex flex-col items-center gap-7' href={href} passHref>
        <Icon
          className={clsx('h-24 w-24', {
            'fill-primary stroke-primary': isActive,
            'fill-neutral-400 stroke-neutral-400': !isActive,
          })}
        />
        <span
          className={clsx('relative text-11 font-medium leading-[120%]', {
            'text-primary': isActive,
            'text-neutral-500': !isActive,
          })}
        >
          {label}
        </span>
      </Link>
    </li>
  );
};

export default NavBarItem;
