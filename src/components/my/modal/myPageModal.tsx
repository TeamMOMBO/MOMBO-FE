import { motion, AnimatePresence } from 'framer-motion';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  type: '로그아웃' | '탈퇴';
  children: React.ReactNode;
}

export default function LogoutModal({
  isOpen,
  onClose,
  onConfirm,
  type,
  children,
}: LogoutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-50 flex items-center justify-center'
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black'
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className='relative h-204 w-315 rounded-2xl bg-white px-24 py-34'
          >
            <div className='mb-16'>
              <h2 className='mb-15 text-body-01 text-lg text-neutral-900'>
                정말 {type} 하시겠어요?
              </h2>
              <p className='text-body-06 text-neutral-600'>{children}</p>
            </div>
            <div className='flex gap-8'>
              <button
                onClick={onClose}
                className='h-40 w-129 flex-1 rounded-lg border border-primary text-primary transition-colors hover:bg-primary/5'
              >
                안 할래요
              </button>
              <button
                onClick={onConfirm}
                className='h-40 w-129 flex-1 rounded-lg bg-primary text-white transition-colors hover:bg-primary/90'
              >
                {type === '로그아웃' ? '로그아웃' : '탈퇴하기'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
