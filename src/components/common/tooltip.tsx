import { useToggle } from '<prefix>/hooks/useToggle';
import CircleInfoIcon from '/public/svgs/light/icon-info-circle.svg';
import CrossIcon from '/public/svgs/arrow/icon-cross.svg';
import { formatLines } from '<prefix>/shared/utils/format';

interface TooltipProps {
  description: string;
  direction?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'right'
    | 'right-top'
    | 'right-bottom'
    | 'left'
    | 'left-top'
    | 'left-bottom'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right';
}

export default function Tooltip({
  description,

  direction = 'bottom-left',
}: TooltipProps) {
  const [isModalOpen, setToggleOpen] = useToggle(false);

  const handleClick = () => {
    setToggleOpen();
  };

  // 위치 스타일 옵션
  const positionStyles = {
    top: 'bottom-[100%] left-1/2 transform -translate-y-6 -translate-x-1/2 ',
    'top-left': 'bottom-[100%] left-0 transform -translate-y-6',
    'top-right':
      'bottom-[100%] left-full transform -translate-x-full -translate-y-6',
    right: 'top-1/2 left-[100%] transform translate-x-6 -translate-y-1/2',
    'right-top': 'top-0 left-[100%] transform translate-x-6 ',
    'right-bottom': 'bottom-0 left-[100%] transform  translate-x-6 ',
    left: 'top-1/2  right-full  -translate-x-6 transform -translate-y-1/2',
    'left-top': 'top-0  right-full -translate-x-6 transform ',
    'left-bottom': 'bottom-0 right-full -translate-x-6 transform',
    bottom: 'top-[100%] translate-y-6  left-1/2 transform -translate-x-1/2',
    'bottom-left': 'top-[100%] translate-y-6 left-0',
    'bottom-right':
      'top-[100%] translate-y-6 left-full transform -translate-x-full',
  };

  return (
    <div className='relative h-18 w-18'>
      <button type='button' onClick={handleClick} className='h-fit w-fit'>
        <CircleInfoIcon
          width={18}
          height={18}
          className='h-18 w-18 stroke-neutral-600'
        />
      </button>
      {isModalOpen && (
        <div
          className={`absolute z-10 bg-white ${positionStyles[direction]} flex w-217 items-start gap-4 rounded-12 border-solid border-neutral-300 px-16 py-12 shadow-[0px_4px_8px_#0000001a]`}
        >
          <p className='text-body-10 text-neutral-600'>
            {formatLines(description)}
          </p>
          <button type='button' onClick={handleClick} className='shrink-0'>
            <CrossIcon
              width={16}
              height={16}
              className='h-16 w-16 stroke-neutral-600'
            />
          </button>
        </div>
      )}
    </div>
  );
}
