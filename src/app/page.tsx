import Input from '<prefix>/components/common/input';
import NavBar from '<prefix>/components/common/bar/navBar';
import BackTopBar from '<prefix>/components/common/bar/backTopBar';
import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import LargeButton from '<prefix>/components/common/button/largeButton';
import MiddleButton from '<prefix>/components/common/button/middleButton';
import Modal from '<prefix>/components/common/modal';

export default function Home() {
  return (
    <div className='mt-56 grid place-items-center gap-8'>
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
      <Input placeholder='placeholder' />
      <Input value='input' />
      <Input value='input' errorMessage='error message' />
      <Input value='input' enableMessage='enable message' />
      <NavBar />
    </div>
  );
}
