import MiddleButton from './button/middleButton';

export default function Modal() {
  return (
    <div className='h-200 w-315 rounded-16 bg-gray-50 shadow-md'>
      <div className='pb-23 pl-23 pt-27'>
        <h2 className='mb-23 text-lg font-bold'>modal</h2>
        <p className='text-md text-neutral-600'>
          Everyone with this link will be able to read, write and share this
          file.
        </p>
      </div>
      <div className='flex justify-center gap-8'>
        <MiddleButton variant='outline'>cancel</MiddleButton>
        <MiddleButton variant='fill' buttonColor='primary'>
          confirm
        </MiddleButton>
      </div>
    </div>
  );
}
