import type { FC } from "react";

interface ModalCloseButtonProps {
  onClose: () => void;
}

const ModalCloseButton: FC<ModalCloseButtonProps> = ({ onClose }) => {
  return (
    <button
      type="button"
      onClick={onClose}
      className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-700"
      aria-label="Close modal"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default ModalCloseButton;