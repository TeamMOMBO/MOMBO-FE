import ChipButton from '<prefix>/components/common/button/chipButton';

interface Tab<T> {
  tab: string;
  value: T;
}

interface TabMenuProps<T> {
  tabs: Tab<T>[];
  currentItem: Tab<T> | null;
  onChangeTab: (index: number) => void;
  containerClassName?: string;
}

export default function TabMenu<T>({
  tabs,
  currentItem,
  onChangeTab,
  containerClassName = '',
}: TabMenuProps<T>) {
  return (
    <div className={`flex gap-8 ${containerClassName}`}>
      {tabs.map(({ tab }, index) => (
        <ChipButton
          key={index}
          isSelected={currentItem?.tab === tab}
          onClick={() => onChangeTab(index)}
        >
          {tab}
        </ChipButton>
      ))}
    </div>
  );
}
