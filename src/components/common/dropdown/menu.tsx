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
          className={`${position} mt-12 w-full overflow-hidden rounded-12 bg-gray-100`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ul className=''>{children}</ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
