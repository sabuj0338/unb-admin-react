import React from "react";

type RadioProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio: React.FC<RadioProps> = ({ label, name, checked, onChange }) => {
  return (
    <label>
      <input
        type="radio"
        className="mr-2"
        checked={checked}
        name={name}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default Radio;
