import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import InputCropImage from "../components/ImageInputWithCropper";
import EnglishNewsForm from "../components/form/EnglishNewsForm";

export default function HomePage() {
  const [show, setShow] = useState<boolean>(false);
  const [blob, setBlob] = useState<string>();
  //   const [image1, setImage1] = useState<string | undefined>();
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleToggleCropperModal = (bimage: string, callback: Function) => {
    // callback(bimage);
    // setShow(!show);
  };

  return (
    <div className="p-5 bg-gray-200">
      <EnglishNewsForm/>
    </div>
  );
}
