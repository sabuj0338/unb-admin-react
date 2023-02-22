import { useState } from "react";

interface OptionInterface {
  key: string;
  value: string;
}

type SelectInputFormFieldProps = {
  label: string;
  required?: boolean;
  defaultValue?: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  errorText?: string;
  optionList: OptionInterface[];
  callback: Function;
};

const errorInputClass =
  "bg-gray-50 border border-red-300 text-gray-900 text-sm rounded focus:ring-red-500 focus:border-red-500 block w-full p-2.5";
const inputClass =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";

export default function SelectInputFormField({
  label,
  required,
  defaultValue,
  placeholder,
  optionList,
  disabled,
  error,
  errorText,
  callback,
}: SelectInputFormFieldProps) {
  const [value, setValue] = useState<string>(defaultValue ?? "");
  const [isError, setIsError] = useState<boolean>(error ?? false);

  const handleOnchageEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
        className={(required && isError) ? errorInputClass : inputClass}
      /> */}
      <select
        id={label}
        disabled={disabled}
        defaultValue={value}
        onChange={handleOnchageEvent}
        className={required && isError ? errorInputClass : inputClass}
      >
        <option value="">{placeholder}</option>
        {optionList.map((item, index) => {
          return (
            <option value={item.key} key={index}>
              {item.value}
            </option>
          );
        })}
      </select>
      {required && isError && (
        <p className="text-xs italic text-red-500">{errorText}</p>
      )}
    </>
  );
}
