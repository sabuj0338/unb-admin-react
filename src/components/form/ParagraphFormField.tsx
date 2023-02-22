import ImageInputWithCropper from "../ImageInputWithCropper";
import TextAreaFormField from "./TextAreaFormField";
import TextEditor from "./TextEditor";

interface ParagraphInterface {
  text: string;
  textError?: string;
  image: string;
  caption?: string;
}

type Props = {
  callback: Function;
  paragraph: ParagraphInterface[];
};

export default function ParagraphFormField({ callback, paragraph }: Props) {
  // const [paragraph, setParagraph] = useState<ParagraphInterface[]>(defaultValue);

  const handleAddMoreParagraph = () => {
    callback([...paragraph, { text: "", image: "", caption: "" }]);
  };

  const handleParagraphTextChange = (value: string, index: number) => {
    const result = paragraph;
    result[index].text = value;
    callback(result);
  };

  const handleParagraphImageChange = (value: string, index: number) => {
    // console.log("🚀 ~ file: ParagraphFormField.tsx:32 ~ handleParagraphImageChange ~ index", index)
    const result = paragraph;
    result[index].image = value;
    callback(result);
  };

  const handleParagraphImageCaptionChange = (value: string, index: number) => {
    const result = paragraph;
    result[index].caption = value;
    callback(result);
  };

  const handleRemoveMoreParagraph = (index: number) => {
    const result = paragraph;
    result.splice(index, 1);
    // console.log(index, result)
    callback([...result]);
  };

  console.log("=> ParagraphFormField rendered!");

  return (
    <div className="w-full flex flex-col items-center">
      {paragraph.map((item, index) => {
        return (
          <div className="w-full my-3" key={index}>
            <div className="mb-5">
              <div className="flex justify-between items-center pb-2">
                <label className="block mb-2 text-lg font-medium text-gray-900">
                  Paragraph<span className="required">*</span>
                </label>
                {/* {(index > 0) && (<CloseButton callback={() => handleRemoveMoreParagraph(index)}/>)} */}
              </div>
              <div className={item.textError ? "rounded-lg border border-red-500" : ""}>
                <TextEditor
                  // editorKey={Math.random().toString()}
                  callback={(value: string) =>
                    handleParagraphTextChange(value, index)
                  }
                />
              </div>
              {item.textError && (
                <p className="text-xs italic text-red-500">{item.textError}</p>
              )}
            </div>

            <div className="mt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Image
                  </label>
                  <ImageInputWithCropper
                    inputId={"paragraphImage" + index}
                    callback={(blob: string) =>
                      handleParagraphImageChange(blob, index)
                    }
                    reset={true}
                  />
                </div>

                <div className="">
                  <TextAreaFormField
                    label="Image Caption"
                    placeholder="Enter Image Caption..."
                    callback={(value: string) =>
                      handleParagraphImageCaptionChange(value, index)
                    }
                    error={false}
                    errorText={"Image Caption is required!"}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
        
        <hr className="bg-gray-300 my-6" />
      <button
        type="button"
        onClick={handleAddMoreParagraph}
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        + Add More Paragraph
      </button>
    </div>
  );
}
