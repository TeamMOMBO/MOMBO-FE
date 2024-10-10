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
    </div>
  );
}
