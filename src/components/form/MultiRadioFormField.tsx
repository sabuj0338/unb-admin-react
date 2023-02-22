import React, { useState } from "react";
import Radio from "./Radio";

interface OptionInterface {
  key: string;
  value: string;
}

type MultiRadioFormFieldProps = {
  label: string;
  required?: boolean;
  defaultValue: string;
  optionList: OptionInterface[];
  error?: boolean;
  disabled?: boolean;
  errorText?: string;
  callback: Function;
};

export default function MultiRadioFormField({
  optionList,
  label,
  required,
  defaultValue,
  disabled,
  error,
  errorText,
  callback,
}: MultiRadioFormFieldProps) {
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
      {optionList.map((item, index) => {
        return (
          <Radio
            key={index}
            label="Top News 1"
            checked={value === "1" ? true : false}
            name="news-type"
            onChange={handleOnchageEvent}
          />
        );
      })}
      {required && isError && (
        <p className="text-xs italic text-red-500">{errorText}</p>
      )}
    </>
  );
}
