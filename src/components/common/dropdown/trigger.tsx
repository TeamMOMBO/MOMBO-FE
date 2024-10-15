interface DropDownTriggerProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function DropDownTrigger({
  children,
  onClick,
}: DropDownTriggerProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
}
