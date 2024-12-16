import ChipButton from '<prefix>/components/common/button/chipButton';

interface Tab {
  tab: string;
  value: 'name' | 'level';
}

interface DictionaryButtonProps {
  tabs: Tab[];
  currentItem: Tab | null;
  onChangeTab: (index: number) => void;
}

export default function DictionaryHeader({
  tabs,
  currentItem,
  onChangeTab,
}: DictionaryButtonProps) {
  return (
    <div className='flex gap-8 pb-20 pl-16 pt-13'>
      {tabs.map((item, index) => (
        <ChipButton
          key={index}
          onClick={() => onChangeTab(index)}
          isSelected={currentItem?.tab === item.tab}
        >
          {item.tab}
        </ChipButton>
      ))}
    </div>
  );
}
