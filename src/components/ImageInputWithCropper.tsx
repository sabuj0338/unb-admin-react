import { useState } from "react";
import Cropper from "react-cropper";

import "cropperjs/dist/cropper.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { toast } from "react-hot-toast";
import CloseButton from "./widget/CloseButton";

const defaultSrc =
  "https://image.tmdb.org/t/p/original/1hZTLWc0NKyGTbb2IyG0AFq60k7.jpg";

type Props = {
  inputId: string;
  callback: Function;
  reset?: boolean;
  close?: Function;
  isError?: boolean;
};

export default function ImageInputWithCropper({
  inputId,
  callback,
  close,
  reset,
  isError,
}: Props) {
  const [image, setImage] = useState(defaultSrc);
  const [show, setShow] = useState<boolean>(false);
  const [blob, setBlob] = useState<string>();
  //   const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState<any>();
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);

    setShow(!show);
  };

  const getHeightWidth = (event: Cropper.CropEvent<HTMLImageElement>) => {
    setWidth(Math.round(event.detail.width));
    setHeight(Math.round(event.detail.height));
  };

  const getCropData = () => {
    // console.log("callback", callback)
    if (typeof cropper === "undefined" || cropper === undefined) {
      toast.error("Failed!");
      return;
    }

    try {
      const blob = cropper.getCroppedCanvas().toDataURL();
      callback(blob);
      setBlob(blob);
      setShow(!show);
    } catch (error) {
      toast.error("Not initialized yet!");
      return;
    }
    // if (typeof cropper !== "undefined") {
    //   //   setCropData(cropper.getCroppedCanvas().toDataURL());
    //     //   console.log(cropper.getContainerData());
    // }
  };

  const handleReset = () => {
    callback("");
    setImage("");
    setBlob("");
  };

  return (
    <>
      <div
        className={`relative w-full flex items-center justify-center border-2 border-dashed rounded-lg ${
          isError ? "border-red-500" : "border-gray-300"
        }`}
      >
        {blob && (
          <img
            className="w-auto max-h-40 h-full object-cover cursor-pointer"
            title="Click to select new image"
            src={blob}
            onDoubleClick={() => image && setShow(!show)}
            alt=""
          />
        )}
        <label htmlFor={inputId} className="group">
          {!blob && (
            <div className="flex flex-col items-center justify-center cursor-pointer px-5 py-3 text-gray-400 group-hover:text-indigo-500">
              <svg
                className="w-10 h-10 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm">
                <span className="font-semibold">Select an image</span>
              </p>
            </div>
          )}
          <input
            id={inputId}
            onChange={onChange}
            type="file"
            className="hidden"
          />

          {blob && (
            <span className="absolute bottom-1 right-1 flex items-center justify-center p-2 rounded-full bg-gray-50 bg-opacity-80 text-base font-medium text-gray-500 hover:bg-indigo-50 hover:text-indigo-500 focus:outline-none cursor-pointer">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
            </span>
          )}
        </label>

        {blob && reset && (
          <CloseButton
            callback={handleReset}
            className="absolute top-1 right-1"
          />
        )}
      </div>

      {show && (
        <div className={`relative z-10 ${!show && "hidden"}`}>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="w-full max-h-screen h-full flex items-center justify-center">
              <div className="w-full h-full relative transform overflow-hidden text-left shadow-xl transition-all">
                <div className="fixed top-5 right-10 z-10">
                  <button
                    onClick={() => close && close()}
                    type="button"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-transperent text-base font-medium text-zinc-600 hover:bg-zinc-700 hover:text-zinc-400 focus:outline-none"
                  >
                    <CloseOutlinedIcon className="w-6 h-6" />
                  </button>
                </div>
                {image && (
                  <Cropper
                    className="h-full w-full bg-zinc-500"
                    //   cropstart={getHeightWidth}
                    //   ready={getHeightWidth}
                    //   cropmove={getHeightWidth}
                    // zoom={getHeightWidth}
                    // onChange={getHeightWidth}
                    // zoomTo={0.5}
                    // initialAspectRatio={40/21}
                    viewMode={1}
                    initialAspectRatio={1.90476190476}
                    aspectRatio={1.90476190476}
                    cropBoxResizable={false}
                    dragMode={"move"}
                    onInitialized={(instance) => setCropper(instance)}
                    crop={getHeightWidth}
                    preview=".img-preview"
                    src={image}
                    // minCropBoxWidth={1200}
                    // minCropBoxHeight={630}
                    // background={false}
                    // responsive={true}
                    // autoCropArea={0}
                    // checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                    // guides={false}
                  />
                )}
                <div className="fixed z-10 bottom-10 right-10">
                  <div className="bg-gray-800 rounded-full px-5 py-3 flex items-center">
                    <div className="text-gray-500">
                      <span>
                        W:{" "}
                        <strong id="width" className="text-gray-200">
                          {width}
                        </strong>
                        px
                      </span>
                      <span className="text-gray-500 px-2">|</span>
                      <span>
                        H:{" "}
                        <strong id="height" className="text-gray-200">
                          {height}
                        </strong>
                        px
                      </span>
                    </div>
                    <div className="w-8"></div>

                    <button
                      onClick={getCropData}
                      className="w-10 h-10 flex items-center justify-center bg-gray-700 outline-none border-gray-700 border text-indigo-500 rounded-full group hover:bg-indigo-500 hover:text-white hover:border-transparent focus:bg-indigo-500 focus:text-white focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 n active:scale-95 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed"
                    >
                      <CheckOutlinedIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
