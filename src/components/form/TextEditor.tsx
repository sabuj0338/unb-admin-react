import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";

type Props = {
  callback: Function;
  editorKey?: string;
};

export default function TextEditor({ callback, editorKey }: Props) {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const log = () => {
    if (editorRef.current) {
      callback(editorRef.current.getContent());
      // console.log(editorRef.current.getContent());
    }
  };
  return (
      <Editor
        key={editorKey}
        onEditorChange={log}
        apiKey="6c7ehr1drrsa0va2ti9x53fe8hpcjninrnnm50k6djnzvab0"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 300,
          placeholder: "Write here...",
          skin: "naked",
          convert_urls: false,
          paste_as_text: true,
        // icons: "thin",
        // inline: true,
        // object_resizing: false,
        // contextmenu: false,
          menubar: true,
        //   plugins: 'table code lists link media paste wordcount',
        //   toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | indent outdent | table | link media',
          plugins: [
            // "a11ychecker",
            "advlist",
            // "advcode",
            // "advtable",
            "autolink",
            // "checklist",
            // "export",
            "lists",
            "code",
            // "paste",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            // "powerpaste",
            "fullscreen",
            // "formatpainter",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
  );
}
