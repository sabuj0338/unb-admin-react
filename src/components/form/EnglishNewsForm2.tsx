import { useState } from "react";

import ImageInputWithCropper from "../ImageInputWithCropper";
import Checkbox from "./Checkbox";
import CheckBoxFormField from "./CheckBoxFormField";
import MultiCheckboxFormField from "./MultiCheckboxFormField";
import ParagraphFormField from "./ParagraphFormField";
import SelectInputFormField from "./SelectInputFormField";
import TextAreaFormField from "./TextAreaFormField";
import TextInputFormField from "./TextInputFormField";
// import "../../form.css";

interface ParagraphInterface {
  text: string;
  image: string;
  caption?: string;
}

interface InputValueInterface {
    value: string;
    isError: true;
}

interface NewsFormInterface {
    headline: string;
    innerPageHeadline: string;
    subHead: string;
    introBreif: string;
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
}

export default function EnglishNewsForm2() {

  const [paragraph, setParagraph] = useState<ParagraphInterface[]>([
    { text: "", image: "", caption: "" },
  ]);

  const [headline, setHeadline] = useState<string>('');
  const [innerPageHeadline, setInnerPageHeadline] = useState<string>('');
  const [subHead, setSubHead] = useState<string>('');
  const [introBreif, setIntroBreif] = useState<string>('');
  
  const [seoTitle, setSeoTitle] = useState<string>('');
  const [seoDescription, setSeoDescription] = useState<string>('');
  const [seoKeywords, setSeoKeywords] = useState<string>('');

  const [category, setCategory] = useState<string>('');
  const [subCategory, setSubCategory] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [editor, setEditor] = useState<string>('');
  const [seoEditor, setSeoEditor] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [type, setType] = useState<string>('');

  const [image, setImage] = useState<string>('');
  const [imageCaption, setImageCaption] = useState<string>('');
  const [newsType, setNewsType] = useState<string>('');
  const [featureNews, setFeatureNews] = useState<string>('');
  const [newsHasVideo, setNewsHasVideo] = useState<string>('');

//   const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  const handleFormSubmit = async (data: any) => {
    // Preventing the page from reloading
    // event.preventDefault();
    console.log(data)

  }

  console.log("=> EnglishNewsForm2 rendered!");

  return (
    <form onSubmit={handleFormSubmit}>
        <button type="submit">Submit</button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4">
            <div className="my-3 bg-white px-3 py-1 shadow rounded">
                <div className="my-5">
                    <TextInputFormField
                    label="Headline"
                    placeholder="Enter Headline..."
                    callback={(value: string) => setHeadline(value)}
                    required={false}
                    error={false}
                    errorText={"Headline is required."}
                    />
                </div>

                <div className="my-5">
                    <TextInputFormField
                    label="Inner Page Headline"
                    placeholder="Enter news details Page headline.."
                    callback={(value: string) => setInnerPageHeadline(value)}
                    required={true}
                    error={false}
                    errorText={"Inner Page Headline is required!"}
                    />
                </div>

                <div className="my-5">
                    <TextInputFormField
                    label="Sub Head"
                    placeholder="Enter Sub Head.."
                    callback={(value: string) => setSubHead(value)}
                    required={true}
                    error={false}
                    errorText={"Sub Head is required!"}
                    />
                </div>

                <div className="my-5">
                    <TextAreaFormField
                    label="Intro / Brief"
                    placeholder="Enter Intro / Brief.."
                    callback={(value: string) => setIntroBreif(value)}
                    required={true}
                    error={false}
                    errorText={"Intro / Brief is required!"}
                    />
                </div>
            </div>
            
            <div className="my-3 bg-white px-3 py-1 shadow rounded">
                <div className="my-5">
                    <TextInputFormField
                    label="SEO Title"
                    placeholder="Enter SEO Title.."
                    callback={(value: string) => console.log(value)}
                    required={true}
                    error={false}
                    errorText={"SEO Title is required!"}
                    />
                </div>

                <div className="my-5">
                    <TextAreaFormField
                    label="SEO Description"
                    placeholder="Enter SEO Description.."
                    callback={(value: string) => console.log(value)}
                    required={true}
                    error={false}
                    errorText={"SEO Description is required!"}
                    />
                </div>

                <div className="my-5">
                    <TextAreaFormField
                    label="SEO Keywords"
                    placeholder="Enter SEO Keywords.."
                    callback={(value: string) => console.log(value)}
                    required={true}
                    error={false}
                    errorText={"SEO Keywords is required!"}
                    />
                </div>
            </div>
        </div>

        <div className="my-3 bg-white px-3 py-5 shadow rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="">
                <SelectInputFormField
                    optionList={[{ key: "1", value: "one" }]}
                    label="News Category"
                    placeholder="Choose a Category"
                    callback={(value: string) => console.log(value)}
                    required={true}
                    error={false}
                    errorText={"News Category is required!"}
                />
                </div>

                <div className="">
                <SelectInputFormField
                    optionList={[]}
                    label="News Sub Category"
                    placeholder="Choose a Sub Category"
                    callback={(value: string) => console.log(value)}
                    required={true}
                    error={false}
                    errorText={"News Sub Category is required!"}
                />
                </div>

                <div className="">
                <SelectInputFormField
                    optionList={[]}
                    label="Author"
                    placeholder="Select Author"
                    callback={(value: string) => console.log(value)}
                    required={true}
                    error={false}
                    errorText={"Author is required!"}
                />
                </div>

                <div className="">
                <SelectInputFormField
                    optionList={[]}
                    label="Editor"
                    placeholder="Select Editor"
                    callback={(value: string) => console.log(value)}
                    required={true}
                    error={false}
                    errorText={"Editor is required!"}
                />
                </div>

                <div className="">
                <SelectInputFormField
                    optionList={[]}
                    label="SEO Editor"
                    placeholder="Select SEO Editor"
                    callback={(value: string) => console.log(value)}
                    required={true}
                    error={false}
                    errorText={"SEO Editor is required!"}
                />
                </div>

                <div className="">
                <TextInputFormField
                    label="Location"
                    placeholder="Enter Location.."
                    callback={(value: string) => console.log(value)}
                    required={true}
                    error={false}
                    errorText={"Location is required!"}
                />
                </div>

                <div className="">
                <CheckBoxFormField
                    label="Type"
                    placeholder="Press Release"
                    defaultValue="1"
                    callback={(value: string) => console.log(value)}
                    required={true}
                    error={false}
                    errorText={"SEO Keywords is required!"}
                />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-4 lg:gap-4">

            <div className="my-3 bg-white p-4 shadow rounded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                    Image Preview
                    </label>
                    <ImageInputWithCropper
                    inputId="image1"
                    callback={(blob: string) => console.log(blob)}
                    />
                </div>

                <div className="">
                    <TextAreaFormField
                    label="Image Caption"
                    placeholder="Enter Image Caption..."
                    callback={(value: string) => console.log(value)}
                    required={true}
                    error={false}
                    errorText={"Image Caption is required!"}
                    />
                </div>
                </div>
            </div>

            <div className="my-3 bg-white px-3 py-1 shadow rounded">
                <div className="my-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                    News Type
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <MultiCheckboxFormField
                        optionList={[
                            { key: "1", value: "Top News 1" },
                            { key: "2", value: "Top News 2" },
                            { key: "3", value: "Top News 3" },
                            { key: "4", value: "Top News 4" },
                            { key: "5", value: "Top News 5" },
                            { key: "6", value: "Top News 6" },
                            { key: "7", value: "Top News 7" },
                        ]}
                        name="news-type"
                        defaultValue=""
                        callback={(value: string) => console.log(value)}
                        // required={true}
                        // error={false}
                        // errorText={"News Type is required!"}
                        />
                    </div>
                    <div className="flex flex-col">
                        <MultiCheckboxFormField
                        optionList={[
                            { key: "trending", value: "Trending News" },
                            { key: "editor_picks", value: "Editor Pick" },
                            { key: "slider", value: "Slider News" },
                            { key: "special", value: "Special News" },
                        ]}
                        name="news-type"
                        defaultValue=""
                        callback={(value: string) => console.log(value)}
                        // required={true}
                        // error={false}
                        // errorText={"News Type is required!"}
                        />
                        <br />
                        <Checkbox
                        label="News Has Video"
                        value="1"
                        checked={false}
                        name="video_status"
                        onChange={() => console.log("first")}
                        />
                    </div>
                    </div>
                </div>
            </div>
        </div>

      <ParagraphFormField
        callback={(value: ParagraphInterface[]) => setParagraph(value)}
        paragraph={paragraph}
      />

      <br />
    </form>
  );
}