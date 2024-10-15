import useClickOutside from '<prefix>/hooks/useClickOutside';
import DropDownItem from './item';
import DropDownMenu from './menu';
import DropDownTrigger from './trigger';

interface DropDownProps {
  children: React.ReactNode;
  handleClose: () => void;
}

export default function DropDown({ children, handleClose }: DropDownProps) {
  const clickRef = useClickOutside(handleClose);
  return (
    <div ref={clickRef} className='relative'>
      {children}
    </div>
  );
}

DropDown.Item = DropDownItem;
DropDown.Menu = DropDownMenu;
DropDown.Trigger = DropDownTrigger;
