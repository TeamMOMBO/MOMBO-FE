import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import NavBar from '<prefix>/components/common/bar/navbar/navBar';
import LocoIcon from '/public/svgs/icon-logo.svg';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <MainTopBar>
        <LocoIcon className='h-19 w-103 fill-primary' />
      </MainTopBar>
      {children}
      <NavBar />
    </>
  );
}
