import type { FC } from "react";
import { Link } from "react-router-dom";

interface BackButtonProps {
  label: string;
  path: string;
  className?: string;
}

const BackButton: FC<BackButtonProps> = ({ label, path, className }) => {
  return (
    <Link
      to={path}
      className={`rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-600 shadow-lg transition hover:bg-gray-100 hover:text-gray-700 ${className ?? ""}`}
    >
      {label}
    </Link>
  );
};

export default BackButton;
