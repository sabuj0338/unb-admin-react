import React from "react";

type CheckboxProps = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  );
};

export default Checkbox;
