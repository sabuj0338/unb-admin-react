import { useState } from "react";

type TextAreaFormFieldProps = {
  label: string;
  required?: boolean;
  defaultValue?: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  errorText?: string;
  callback: Function;
};

const errorInputClass =
  "bg-gray-50 border border-red-300 text-gray-900 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full p-2.5";
const inputClass =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";

export default function TextAreaFormField({
  label,
  required,
  defaultValue,
  placeholder,
  disabled,
  error,
  errorText,
  callback,
}: TextAreaFormFieldProps) {
  const [value, setValue] = useState<string>(defaultValue ?? "");
  const [isError, setIsError] = useState<boolean>(error ?? false);

  const handleOnchageEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <textarea
        id={label}
        rows={4}
        disabled={disabled}
        onChange={handleOnchageEvent}
        className={required && isError ? errorInputClass : inputClass}
        placeholder={placeholder}
        defaultValue={value}
      >
      </textarea>
      {required && isError && (
        <p className="text-xs italic text-red-500">{errorText}</p>
      )}
    </>
  );
}
