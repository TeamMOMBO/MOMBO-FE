import Image from 'next/image';
import ExpandIcon from '/public/svgs/arrow/icon-expand.svg';
import CrossIcon from '/public/svgs/arrow/icon-cross.svg';

import { useToggle } from '<prefix>/hooks/useToggle';

type ImagePreviewModalProps = {
  imgSrc: string;
};

export default function ImagePreviewModal({ imgSrc }: ImagePreviewModalProps) {
  const [isModalOpen, setToggleOpen] = useToggle(false);

  const handleClick = () => {
    setToggleOpen();
  };

  return (
    <>
      <button
        type='button'
        onClick={handleClick}
        className='relative h-153 w-full overflow-hidden rounded-12'
      >
        <Image
          src={imgSrc}
          alt='성분 분석 이미지'
          fill
          className='!static object-cover object-center'
          sizes='(max-width: 390) 100vw'
          priority
        />
        <div className='absolute bottom-14 right-12 h-fit w-fit rounded-4 bg-black bg-opacity-50'>
          <ExpandIcon
            width={24}
            height={24}
            className='h-24 w-24 stroke-white'
          />
        </div>
      </button>
      {isModalOpen && (
        <div
          onClick={handleClick}
          className='absolute left-0 top-0 z-20 flex h-full w-full cursor-pointer items-center justify-center bg-black bg-opacity-70'
        >
          <button type='button' className='absolute right-16 top-67'>
            <CrossIcon
              width={24}
              height={24}
              className='h-24 w-24 stroke-white'
            />
          </button>
          <Image
            src={imgSrc}
            alt='성분 분석 이미지'
            fill
            priority
            className='!static object-contain'
            sizes='(max-width: 390) 100vw'
          />
        </div>
      )}
    </>
  );
}
