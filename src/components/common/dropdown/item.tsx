import { motion } from 'framer-motion';

interface DropDownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function DropDownItem({ children, onClick }: DropDownItemProps) {
  return (
    <motion.li
      whileHover={{ backgroundColor: 'rgba(30, 162, 181, 0.2)' }}
      whileTap={{ scale: 0.9, backgroundColor: 'rgba(25, 140, 160, 0.2)' }}
      className='text-md cursor-pointer rounded-12 pb-11 pt-12'
      onClick={onClick}
    >
      {children}
    </motion.li>
  );
}
