import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

type Props = {
  callback: Function;
  className?: string;
};

export default function CloseButton({ callback, className }: Props) {
  return (
    <button
      onClick={() => callback()}
      type="button"
      className={`flex items-center justify-center p-1 rounded-full bg-red-50 bg-opacity-80 text-base font-medium text-red-500 hover:bg-red-100 hover:text-red-500 focus:outline-none ${className}`}
    >
      <CloseOutlinedIcon />
    </button>
  );
}
