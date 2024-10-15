interface ProgressBarProps {
  currentNum: number;
  totalNum: number;
}

export default function ProgressBar({
  currentNum,
  totalNum,
}: ProgressBarProps) {
  return (
    <div className='h-8 w-full rounded-full bg-neutral-200'>
      <div
        className={`h-full rounded-full bg-primary`}
        style={{ width: `${(currentNum / totalNum) * 100}%` }} // 비율 계산
      ></div>
    </div>
  );
}
