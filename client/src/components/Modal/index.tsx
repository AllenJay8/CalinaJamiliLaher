import type { FC, ReactNode } from "react";
import { useEffect } from "react";
import ModalCloseButton from "../Button/ModalCloseButton";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
  showCloseButton?: boolean;
  isFullScreen?: boolean;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  className,
  children,
  showCloseButton,
  isFullScreen,
}) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const contentClasses = isFullScreen
    ? "relative h-full w-full rounded-lg bg-white"
    : "relative w-full max-h-[90vh] rounded-lg bg-white sm:max-w-md md:max-w-lg lg:max-w-2xl";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4"
      onClick={onClose}
    >
      {!isFullScreen && (
        <div className="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-lg" />
      )}
      <div
        className={`${contentClasses} ${className ?? ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        {showCloseButton && <ModalCloseButton onClose={onClose} />}
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

