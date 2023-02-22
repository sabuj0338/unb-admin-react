import React, { useState } from "react";
import Checkbox from "./Checkbox";

interface OptionInterface {
  key: string;
  value: string;
}

type MultiCheckboxFormFieldProps = {
  name: string;
//   label: string;
  required?: boolean;
  defaultValue: string;
  optionList: OptionInterface[];
  error?: boolean;
  errorText?: string;
  callback: Function;
};

export default function MultiCheckboxFormField({
  optionList,
  name,
//   label,
  required,
  defaultValue,
  error,
  errorText,
  callback,
}: MultiCheckboxFormFieldProps) {
  const [value, setValue] = useState<string>(defaultValue ?? "");
  const [isError, setIsError] = useState<boolean>(error ?? false);

  const handleOnchageEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked) {
        event.target.value ? setIsError(false) : setIsError(true);
        setValue(event.target.value);
        callback(event.target.value);
    } else {
        event.target.value ? setIsError(false) : setIsError(true);
        setValue('');
        callback('');
    }
  };

  return (
    <>
      {optionList.map((item, index) => {
        return (
          <Checkbox
            key={index}
            label={item.value}
            value={item.key}
            checked={value === item.key ? true : false}
            name={name}
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
