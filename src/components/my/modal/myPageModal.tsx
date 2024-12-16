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
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 bg-black bg-opacity-25' onClick={onClose} />
      <div className='relative h-204 w-315 rounded-2xl bg-white px-24 py-34'>
        <div className='mb-16'>
          <h2 className='mb-15 text-body-01 text-lg text-neutral-900'>
            정말 {type} 하시겠어요?
          </h2>
          <p className='text-body-06 text-neutral-600'>{children}</p>
        </div>
        <div className='flex gap-8'>
          <button
            onClick={onClose}
            className='h-40 w-129 flex-1 rounded-lg border border-primary text-primary'
          >
            안 할래요
          </button>

          {type === '로그아웃' ? (
            <button
              onClick={onConfirm}
              className='h-40 w-129 flex-1 rounded-lg bg-primary text-white'
            >
              로그아웃
            </button>
          ) : (
            <button
              onClick={onConfirm}
              className='h-40 w-129 flex-1 rounded-lg bg-primary text-white'
            >
              탈퇴하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
