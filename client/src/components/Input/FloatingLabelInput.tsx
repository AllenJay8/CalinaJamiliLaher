import type { ChangeEvent, FC, InputHTMLAttributes } from "react";

interface FloatingLabelInputProps {
  label: string;
  type: "text" | "date" | "password";
  name: string;
  id?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  newLabelClassName?: string;
  labelClassName?: string;
  newInputClassName?: string;
  inputClassName?: string;
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  errors?: string[];
  autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];
}

const defaultInputClassName =
  "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500";

const defaultLabelClassName =
  "absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 dark:peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4";

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({
  label,
  type,
  name,
  id: idProp,
  value,
  onChange,
  newLabelClassName,
  labelClassName,
  newInputClassName,
  inputClassName,
  required,
  autoFocus,
  disabled,
  errors,
  autoComplete,
}) => {
  const id = idProp ?? name;

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={
          newInputClassName
            ? newInputClassName
            : `${defaultInputClassName} ${inputClassName ?? ""}`.trim()
        }
        placeholder=" "
        required={required}
        autoFocus={autoFocus}
        disabled={disabled}
        autoComplete={autoComplete}
      />
      <label
        htmlFor={id}
        className={
          newLabelClassName
            ? newLabelClassName
            : `${defaultLabelClassName} ${labelClassName ?? ""}`.trim()
        }
      >
        
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      {errors && errors.length > 0 && (
        <span className="mt-1 block text-sm text-red-600">{errors[0]}</span>
      )}
    </div>
  );
};

export default FloatingLabelInput;
