import React, { ReactNode, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

type Props = {
  children: ReactNode;
  title?: string;
  show: boolean;
  close?: Function;
};

export default function Modal({ children, show, close, title }: Props) {
  return (
    <div
      className={`relative z-10 ${!show && "hidden"}`}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="flex justify-between items-center bg-gray-100 px-4 py-3">
              <h1 className="text-lg">{title}</h1>
              <button
                onClick={close && (() => close())}
                type="button"
                className="justify-center rounded-full w-8 h-8 border border-gray-300 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <CloseOutlinedIcon />
              </button>
            </div>
            <div className="w-full bg-white px-6 py-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
