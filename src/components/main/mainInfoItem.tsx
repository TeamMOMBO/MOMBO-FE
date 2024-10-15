type MainInfo = {
  description: string;
};

type MainInfoItemProps = {
  mainInfoItem: MainInfo;
};

export default function MainInfoItem({ mainInfoItem }: MainInfoItemProps) {
  const { description } = mainInfoItem;
  return (
    <div className='flex h-100 w-full shrink-0 cursor-pointer bg-white p-16 px-33 py-23'>
      <p className='text-overflow text-body-01 text-neutral-900'>
        {/*//TODO description 줄바꿈 처리 */}
        {description}
      </p>
    </div>
  );
}
