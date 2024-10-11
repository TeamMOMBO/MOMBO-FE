interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className='relative h-full w-full px-16 pb-40'>{children}</div>;
}
