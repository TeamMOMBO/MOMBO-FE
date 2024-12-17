import { motion } from 'framer-motion';
import CheckIcon from '/public/svgs/light/icon-check.svg';

interface DropDownItemProps {
  children: React.ReactNode;
  isChecked: boolean;
  onClick?: () => void;
}

export default function DropDownItem({
  children,
  onClick,
  isChecked,
}: DropDownItemProps) {
  return (
    <motion.li
      whileHover={{ backgroundColor: 'rgba(30, 162, 181, 0.2)' }}
      whileTap={{ backgroundColor: '13B3FE' }}
      className='text-md flex h-56 cursor-pointer items-center p-16'
      onClick={onClick}
    >
      <div className='basis-full'>{children}</div>
      {isChecked && <CheckIcon className='stroke-primary' />}
    </motion.li>
  );
}
