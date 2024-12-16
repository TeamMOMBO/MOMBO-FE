import { motion } from 'framer-motion';
import Image from 'next/image';

export default function IngredientLoading() {
  return (
    <div className='absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-30 bg-white'>
      <div className='relative h-173 w-173'>
        <svg
          className='absolute left-0 top-0 h-full w-full -rotate-90 transform'
          viewBox='0 0 173 173'
        >
          <circle
            cx='86.5'
            cy='86.5'
            r='82.5'
            stroke='#F1F5F9'
            strokeWidth='7'
            fill='white'
          />
          <motion.circle
            cx='86.5'
            cy='86.5'
            r='82.5'
            stroke='#13B3FE'
            strokeWidth='7'
            fill='none'
            strokeLinecap='round'
            strokeDasharray={2 * Math.PI * 82.5}
            strokeDashoffset={2 * Math.PI * 82.5}
            animate={{
              strokeDashoffset: 0,
            }}
            transition={{
              duration: 5,
              ease: 'linear',
            }}
          />
        </svg>

        <div className='absolute left-1/2 top-1/2 flex h-142 w-142 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center overflow-hidden rounded-full'>
          <Image
            src='/images/image-baby.png' // 정적 경로로 제공
            alt='아기 이미지'
            className='absolute left-1/2 top-23 w-108 -translate-x-1/2 transform'
          />
          <motion.div
            className='absolute bottom-10 left-0'
            animate={{
              rotate: [37, 30, 37, 44, 37], // 기본 각도 -37도에서 왼쪽(-44도)와 오른쪽(-30도)으로 회전
            }}
            transition={{
              duration: 4, // 2초 동안 한 번의 움직임 완료
              repeat: Infinity, // 무한 반복
              ease: 'easeInOut', // 부드러운 움직임
            }}
          >
            <Image
              src='/images/image-magnifier.png'
              alt='돋보기 이미지'
              className='w-64'
            />
          </motion.div>
        </div>
      </div>
      <span className='text-center text-head-01 text-neutral-900'>
        성분을 샅샅이
        <br />
        분석하는 중이에요
      </span>
    </div>
  );
}
