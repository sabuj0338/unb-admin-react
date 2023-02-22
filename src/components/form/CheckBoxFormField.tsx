import { useState } from "react";

type CheckBoxFormFieldProps = {
  label: string;
  required?: boolean;
  defaultValue: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  errorText?: string;
  callback: Function;
};

const errorInputClass = "h-5 w-5 text-blue-600 focus:ring-blue-500 rounded";
const inputClass = "h-5 w-5 text-blue-600 focus:ring-blue-500 rounded";

export default function CheckBoxFormField({
  label,
  required,
  defaultValue,
  placeholder,
  disabled,
  error,
  errorText,
  callback,
}: CheckBoxFormFieldProps) {
  const [value, setValue] = useState<string>(defaultValue ?? "");
  const [isError, setIsError] = useState<boolean>(error ?? false);

  const handleOnchageEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setIsError(false) : setIsError(true);
    setValue(event.target.value);
    callback(event.target.value);
  };

  return (
    <>
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label} {required && <span className="required">*</span>}
      </label>
      {/* <input
        id={label}
        placeholder={placeholder}
        onChange={handleOnchageEvent}
        required={required}
        value={value}
        disabled={disabled}
        className={(required && isError) ? errorInputClass : inputClass}
      /> */}
      <label className="inline-flex items-center mt-1">
        <input
          type="checkbox"
          onChange={handleOnchageEvent}
          value={value}
          disabled={disabled}
          className={required && isError ? errorInputClass : inputClass}
        />
        <span className="ml-2 text-gray-700">{placeholder}</span>
      </label>
      {required && isError && (
        <p className="text-xs italic text-red-500">{errorText}</p>
      )}
    </>
  );
}
