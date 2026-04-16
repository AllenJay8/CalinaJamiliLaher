import { type FC } from "react";
import Spinner from "../Spinner/Spinner";

interface SubmitButtonProps {
    label: string;
    newClassName?: string;
    className?: string;
    loading?: boolean;
    loadingLabel?: string;
}

export const SubmitButton: FC<SubmitButtonProps> = ({
    label,
    newClassName,
    className,
    loading,
    loadingLabel,
}) => {
    return (
        <button
            type="submit"
            className={`${
                newClassName
                    ? newClassName
                    : "px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium cursor-pointer rounded-lg shadow-lg flex items-center justify-center gap-2"
            } ${className}`}
            disabled={loading}
        >
            {loading ? (
                <>
                    <Spinner size="xs" />
                    {loadingLabel || "Loading..."}
                </>
            ) : (
                label
            )}
        </button>
    );
};

export default SubmitButton;