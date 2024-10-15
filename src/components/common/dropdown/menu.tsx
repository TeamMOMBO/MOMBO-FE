import { AnimatePresence, motion } from 'framer-motion';

interface DropDownMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  position?: string;
}

export default function DropDownMenu({
  children,
  isOpen,
  position = 'bottom-30 right-0',
}: DropDownMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`${position} absolute z-10 w-120 overflow-hidden rounded-12 border border-solid bg-gray-100`}
          initial={{ opacity: 0, scale: 0.5, x: 20, y: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 20, y: -50 }}
        >
          <ul className='text-center'>{children}</ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
