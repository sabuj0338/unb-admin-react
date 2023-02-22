import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Select from "react-select";

import useOnScreen from "../../hook/useOnScreen";
import ImageInputWithCropper from "../ImageInputWithCropper";
import MultiCheckboxFormField from "./MultiCheckboxFormField";
import ParagraphFormField from "./ParagraphFormField";
// import "../../form.css";

const errorInputClass =
  "rounded block w-full p-2.5 border border-red-300 focus:ring-red-500 focus:border-red-500";
const inputClass = "rounded block w-full p-2.5";

interface ParagraphInterface {
  text: string;
  textError?: string;
  image: string;
  //   imageError?: string;
  caption?: string;
}

interface OptionInterface {
  label: string;
  value: string;
}

export default function EnglishNewsForm() {
  const {
    register,
    clearErrors,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [paragraph, setParagraph] = useState<ParagraphInterface[]>([
    { text: "", image: "", caption: "" },
  ]);
  const [categories, setCategories] = useState<OptionInterface[]>([
    { label: "one", value: "1" },
    { label: "two", value: "2" },
    { label: "three", value: "3" },
  ]);

  const [image, setImage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [newsType, setNewsType] = useState<string>("");

  const [author, setAuthor] = useState<OptionInterface[]>([]);

  const paragraphRef = useRef<null | HTMLDivElement>(null);

  const section1 = useRef<null | HTMLDivElement>(null);
  const isVisibleSection1 = useOnScreen(section1);

  const section2 = useRef<null | HTMLDivElement>(null);
  const isVisibleSection2 = useOnScreen(section2);

  const section3 = useRef<null | HTMLDivElement>(null);
  const isVisibleSection3 = useOnScreen(section3);

  const section4 = useRef<null | HTMLDivElement>(null);
  const isVisibleSection4 = useOnScreen(section4);

  const section5 = useRef<null | HTMLDivElement>(null);
  const isVisibleSection5 = useOnScreen(section5);

  const section6 = useRef<null | HTMLDivElement>(null);
  const isVisibleSection6 = useOnScreen(section6);

  const section7 = useRef<null | HTMLDivElement>(null);
  const isVisibleSection7 = useOnScreen(section7);

  //   const m7 = useRef<null | HTMLDivElement>(null);
  //   const isVisibleM7 = useOnScreen(m7);

  const handleNewsImage = async (blob: string) => {
    setImage(blob);
    clearErrors("image");
    setValue("image", blob);
    // blob ? setImageError(false) : setImageError(true);
  };

  const handleAuthorChange = (selectedOption: any) => {
    setAuthor(selectedOption);
    clearErrors("authors");
    const authorList = selectedOption.map(
      (item: OptionInterface) => item.value
    );
    setValue("authors", [...authorList]);
  };

  //   const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  const handleFormSubmit = async (formData: any) => {
    // Preventing the page from reloading
    // event.preventDefault();
    // console.log(data, paragraph);
    // if (!image || image === "") {
    //   imageRef.current?.scrollIntoView({ behavior: "smooth" });
    //   // setError(true);
    //   setImageError(true);
    //   toast.error("News Image is required!");
    //   return;
    // }

    let isParagraphHasError: boolean = false;
    const notValidatedParagraph: ParagraphInterface[] = paragraph.map(
      (item, index) => {
        if (item.text === "") {
          item.textError = "Paragraph is required!";
          isParagraphHasError = true;
        } else {
          item.textError = "";
        }
        return item;
      }
    );

    if (isParagraphHasError) {
      setParagraph(notValidatedParagraph);
      paragraphRef.current?.scrollIntoView({ behavior: "smooth" });
      toast.error("Paragraph is required!");
      setError(true);
      return;
    }

    // all validation is completed
    const formBody = {
      title: formData.headline,
      inner_title: formData.innerPageHeadline,
      standfast: formData.subHead,
      slug: formData.intro,
      seo_title: formData.seoTitle,
      seo_desc: formData.seoDescription,
      seo_keyword: formData.seoKeywords,
      category_id: formData.category,
      sub_category_id: formData.subCategory,
      author_id: formData.authors, // list of author
      editor: formData.editor,
      seoeditor: formData.seoEditor,
      location: formData.location,
      pr: formData.type,
      image: formData.image,
      image_caption: formData.imageCaption,
      top: newsType,
      video_status: formData.videoStatus,
      paragraph: paragraph,
    };

    console.log(formData);
    console.log(formBody);
  };

  console.log("=> EnglishNewsForm rendered!");

  return (
    <form onSubmit={handleSubmit((data) => handleFormSubmit(data))}>
      <div className="w-full flex flex-wrap mt-16">
        <div className="w-full md:w-1/6 lg:w-1/6 px-2 text-gray-800 leading-normal">
          <div
            className="w-full sticky inset-0 hidden lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden md:block lg:block mt-0 my-2 lg:my-0 lg:border-transparent lg:bg-transparent"
            id="menu-content"
          >
            <ul className="list-reset py-2 md:py-0">
              <li
                className={`py-1 md:my-2 hover:bg-indigo-100 lg:hover:bg-transparent border-l-4 border-transparent hover:font-medium hover:border-indigo-500 ${
                  isVisibleSection1
                    ? " font-medium border-indigo-500 bg-indigo-100"
                    : ""
                }`}
                title="News primary information"
              >
                <a
                  href="#section1"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-indigo-600"
                >
                  <span className="pb-1 md:pb-0 text-md">Primary Info</span>
                </a>
              </li>
              <li
                className={`py-1 md:my-2 hover:bg-indigo-100 lg:hover:bg-transparent border-l-4 border-transparent hover:font-medium hover:border-indigo-500 ${
                  isVisibleSection2
                    ? " font-medium border-indigo-500 bg-indigo-100"
                    : ""
                }`}
                title="News SEO information"
              >
                <a
                  href="#section2"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-indigo-600"
                >
                  <span className="pb-1 md:pb-0 text-md">SEO</span>
                </a>
              </li>
              <li
                className={`py-1 md:my-2 hover:bg-indigo-100 lg:hover:bg-transparent border-l-4 border-transparent hover:font-medium hover:border-indigo-500 ${
                  isVisibleSection3
                    ? " font-medium border-indigo-500 bg-indigo-100"
                    : ""
                }`}
                title="News categories, sub categories, authors, editors and more"
              >
                <a
                  href="#section3"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-indigo-600"
                >
                  <span className="pb-1 md:pb-0 text-md">Categories</span>
                </a>
              </li>
              <li
                className={`py-1 md:my-2 hover:bg-indigo-100 lg:hover:bg-transparent border-l-4 border-transparent hover:font-medium hover:border-indigo-500 ${
                  isVisibleSection4
                    ? " font-medium border-indigo-500 bg-indigo-100"
                    : ""
                }`}
                title="News categories, sub categories, authors, editors and more"
              >
                <a
                  href="#section4"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-indigo-600"
                >
                  <span className="pb-1 md:pb-0 text-md">Image</span>
                </a>
              </li>
              <li
                className={`py-1 md:my-2 hover:bg-indigo-100 lg:hover:bg-transparent border-l-4 border-transparent hover:font-medium hover:border-indigo-500 ${
                  isVisibleSection5
                    ? " font-medium border-indigo-500 bg-indigo-100"
                    : ""
                }`}
                title="News main image"
              >
                <a
                  href="#section5"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-indigo-600"
                >
                  <span className="pb-1 md:pb-0 text-md">News Type</span>
                </a>
              </li>

              <li
                className={`py-1 md:my-2 hover:bg-indigo-100 lg:hover:bg-transparent border-l-4 border-transparent hover:font-medium hover:border-indigo-500 ${
                  isVisibleSection6
                    ? " font-medium border-indigo-500 bg-indigo-100"
                    : ""
                }`}
                title="News body details"
              >
                <a
                  href="#section6"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-indigo-600"
                >
                  <span className="pb-1 md:pb-0 text-md">Paragraph</span>
                </a>
              </li>

              <li
                className={`py-1 md:my-2 hover:bg-indigo-100 lg:hover:bg-transparent border-l-4 border-transparent hover:font-medium hover:border-indigo-500 ${
                  isVisibleSection7
                    ? " font-medium border-indigo-500 bg-indigo-100"
                    : ""
                }`}
                title="News form submit button"
              >
                <a
                  href="#section7"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-indigo-600"
                >
                  <span className="pb-1 md:pb-0 text-md">Finish</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section className="w-full md:w-5/6 lg:w-5/6">
          <h2
            id="section1"
            className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl"
          >
            Primary Information
          </h2>

          <div
            className="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white"
            ref={section1}
          >
            <div className="">
              <div className="my-5">
                <label
                  htmlFor="headline"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Headline<span className="required">*</span>
                </label>
                <input
                  id="headline"
                  type="text"
                  className={errors.headline ? errorInputClass : inputClass}
                  placeholder="Enter headline..."
                  {...register("headline", {
                    required: "Headline is required.",
                  })}
                />
                {errors.headline && (
                  <p className="text-xs italic text-red-500">
                    Headline is required
                  </p>
                )}
              </div>

              <div className="my-5">
                <label
                  htmlFor="innerPageHeadline"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Inner Page Headline<span className="required">*</span>
                </label>
                <input
                  id="innerPageHeadline"
                  type="text"
                  className={
                    errors.innerPageHeadline ? errorInputClass : inputClass
                  }
                  placeholder="Enter news details Page headline..."
                  {...register("innerPageHeadline", {
                    required: "Inner Page Headline is required!",
                  })}
                />
                {errors.innerPageHeadline && (
                  <p className="text-xs italic text-red-500">
                    Inner Page Headline is required!
                  </p>
                )}
              </div>

              <div className="my-5">
                <label
                  htmlFor="subHead"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sub Head<span className="required">*</span>
                </label>
                <input
                  id="subHead"
                  type="text"
                  className={errors.subHead ? errorInputClass : inputClass}
                  placeholder="Enter Sub Head..."
                  {...register("subHead", {
                    required: "Sub Head is required!",
                  })}
                />
                {errors.subHead && (
                  <p className="text-xs italic text-red-500">
                    Sub Head is required!
                  </p>
                )}
              </div>

              <div className="my-5">
                <label
                  htmlFor="intro"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Intro / Brief<span className="required">*</span>
                </label>
                <input
                  id="intro"
                  type="text"
                  className={errors.intro ? errorInputClass : inputClass}
                  placeholder="Enter Intro / Brief..."
                  {...register("intro", {
                    required: "Intro / Brief is required!",
                  })}
                />
                {errors.intro && (
                  <p className="text-xs italic text-red-500">
                    Intro / Brief is required!
                  </p>
                )}
              </div>
            </div>
          </div>

          <hr className="bg-gray-300 my-12" id="section2" />

          <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
            SEO
          </h2>

          <div
            className="p-8 mt-6 lg:mt-0 rounded shadow bg-white"
            ref={section2}
          >
            <div className="">
              <div className="my-5">
                <label
                  htmlFor="seoTitle"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  SEO Title<span className="required">*</span>
                </label>
                <input
                  id="seoTitle"
                  type="text"
                  className={errors.seoTitle ? errorInputClass : inputClass}
                  placeholder="Enter news details Page headline..."
                  {...register("seoTitle", {
                    required: "SEO Title is required!",
                  })}
                />
                {errors.seoTitle && (
                  <p className="text-xs italic text-red-500">
                    SEO Title is required!
                  </p>
                )}
              </div>

              <div className="my-5">
                <label
                  htmlFor="seoDescription"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  SEO Description<span className="required">*</span>
                </label>
                <input
                  id="seoDescription"
                  type="text"
                  className={
                    errors.seoDescription ? errorInputClass : inputClass
                  }
                  placeholder="Enter news details Page headline..."
                  {...register("seoDescription", {
                    required: "SEO Description is required!",
                  })}
                />
                {errors.seoDescription && (
                  <p className="text-xs italic text-red-500">
                    SEO Description is required!
                  </p>
                )}
              </div>

              <div className="my-5">
                <label
                  htmlFor="seoKeywords"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  SEO Keywords<span className="required">*</span>
                </label>
                <input
                  id="seoKeywords"
                  type="text"
                  className={errors.seoKeywords ? errorInputClass : inputClass}
                  placeholder="Enter news details Page headline..."
                  {...register("seoKeywords", {
                    required: "SEO Keywords is required!",
                  })}
                />
                {errors.seoKeywords && (
                  <p className="text-xs italic text-red-500">
                    SEO Keywords is required!
                  </p>
                )}
              </div>
            </div>
          </div>

          <hr className="bg-gray-300 my-12" id="section3" />

          <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
            Categories & More Options
          </h2>

          <div
            className="p-8 mt-6 lg:mt-0 rounded shadow bg-white"
            ref={section3}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Category<span className="required">*</span>
                </label>
                <select
                  id="category"
                  className={errors.category ? errorInputClass : inputClass}
                  {...register("category", {
                    required: "Category is required.",
                  })}
                >
                  <option value="">Choose a Category</option>
                  {categories.map((item, index) => {
                    return (
                      <option value={item.value} key={index}>
                        {item.label}
                      </option>
                    );
                  })}
                </select>
                {errors.category && (
                  <p className="text-xs italic text-red-500">
                    Category is required!
                  </p>
                )}
              </div>

              <div className="">
                <label
                  htmlFor="subCategory"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sub Category<span className="required">*</span>
                </label>
                <select
                  id="subCategory"
                  className={errors.subCategory ? errorInputClass : inputClass}
                  {...register("subCategory", {
                    required: "Sub Category is required.",
                  })}
                >
                  <option value="">Choose a Sub Category</option>
                  {categories.map((item, index) => {
                    return (
                      <option value={item.value} key={index}>
                        {item.label}
                      </option>
                    );
                  })}
                </select>
                {errors.subCategory && (
                  <p className="text-xs italic text-red-500">
                    Sub Category is required!
                  </p>
                )}
              </div>

              <div className="">
                <label
                  htmlFor="author"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Author<span className="required">*</span>
                </label>
                <input
                  type="hidden"
                  {...register("authors", {
                    required: "Authors is required.",
                  })}
                  value={author.map(({ value }) => value)}
                />
                <Select
                  isMulti
                  value={author}
                  onChange={handleAuthorChange}
                  options={categories}
                  className={
                    errors.authors
                      ? "rounded block w-full border border-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      : "rounded block w-full focus:outline-none focus:ring-0"
                  }
                />
                {/* <select
                    id="author"
                    className={errors.author ? errorInputClass : inputClass}
                    {...register("author", { required: "Author is required." })}
                    multiple
                  >
                    <option value="">Choose a Author</option>
                    {categories.map((item, index) => {
                      return (
                        <option value={item.key} key={index}>
                          {item.value}
                        </option>
                      );
                    })}
                  </select> */}
                {errors.authors && (
                  <p className="text-xs italic text-red-500">
                    Authors is required!
                  </p>
                )}
              </div>

              <div className="">
                <label
                  htmlFor="editor"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Editor<span className="required">*</span>
                </label>
                <select
                  id="editor"
                  className={errors.editor ? errorInputClass : inputClass}
                  {...register("editor", { required: "Editor is required." })}
                >
                  <option value="">Choose a Editor</option>
                  {categories.map((item, index) => {
                    return (
                      <option value={item.value} key={index}>
                        {item.label}
                      </option>
                    );
                  })}
                </select>
                {errors.editor && (
                  <p className="text-xs italic text-red-500">
                    Editor is required!
                  </p>
                )}
              </div>

              <div className="">
                <label
                  htmlFor="seoEditor"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  SEO Editor<span className="required">*</span>
                </label>
                <select
                  id="seoEditor"
                  className={errors.seoEditor ? errorInputClass : inputClass}
                  {...register("seoEditor", {
                    required: "SEO Editor is required.",
                  })}
                >
                  <option value="">Choose a SEO Editor</option>
                  {categories.map((item, index) => {
                    return (
                      <option value={item.value} key={index}>
                        {item.label}
                      </option>
                    );
                  })}
                </select>
                {errors.seoEditor && (
                  <p className="text-xs italic text-red-500">
                    SEO Editor is required!
                  </p>
                )}
              </div>

              <div className="">
                <label
                  htmlFor="location"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Location<span className="required">*</span>
                </label>
                <input
                  id="location"
                  type="text"
                  className={errors.location ? errorInputClass : inputClass}
                  placeholder="Enter Location..."
                  {...register("location", {
                    required: "Location is required!",
                  })}
                />
                {errors.location && (
                  <p className="text-xs italic text-red-500">
                    Location is required!
                  </p>
                )}
              </div>

              <div className="">
                <label
                  htmlFor="type"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Type
                </label>

                <label className="inline-flex items-center mt-1">
                  <input
                    id="type"
                    value="1"
                    type="checkbox"
                    {...register("type")}
                  />
                  <span className="ml-2 text-gray-700">Press Release</span>
                </label>
                {errors.type && (
                  <p className="text-xs italic text-red-500">
                    Type is required!
                  </p>
                )}
              </div>
            </div>
          </div>

          <hr className="bg-gray-300 my-12" id="section4" />

          <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
            Image
          </h2>

          <div
            className="p-8 mt-6 lg:mt-0 rounded shadow bg-white"
            ref={section4}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  News Image<span className="required">*</span>
                </label>
                <input
                  type="hidden"
                  {...register("image", {
                    required: "News Image is required.",
                  })}
                  value={image}
                />
                <ImageInputWithCropper
                  inputId="image"
                  callback={handleNewsImage}
                  // callback={(blob: string) => setImage(blob)}
                  isError={errors.image && true}
                />

                {errors.image && (
                  <p className="text-xs italic text-red-500">
                    News Image is required!
                  </p>
                )}
              </div>

              <div className="">
                <label
                  htmlFor="imageCaption"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Image Caption
                </label>
                <textarea
                  className={errors.imageCaption ? errorInputClass : inputClass}
                  placeholder="Enter Image Caption..."
                  id="imageCaption"
                  rows={3}
                  {...register("imageCaption")}
                ></textarea>
                {errors.imageCaption && (
                  <p className="text-xs italic text-red-500">
                    Image Caption is required!
                  </p>
                )}
              </div>
            </div>
          </div>

          <hr className="bg-gray-300 my-12" id="section5" />

          <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
            News Type
          </h2>

          <div
            className="p-8 mt-6 lg:mt-0 rounded shadow bg-white"
            ref={section5}
          >
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
                      { key: "trending", value: "Trending News" },
                      { key: "editor_picks", value: "Editor Pick" },
                      { key: "slider", value: "Slider News" },
                      { key: "special", value: "Special News" },
                    ]}
                    name="news-type"
                    defaultValue=""
                    callback={(value: string) => setNewsType(value)}
                    //
                    // error={false}
                    // errorText={"News Type is required!"}
                  />
                  <br />
                  <label className="inline-flex items-center mt-1">
                    <input
                      type="checkbox"
                      value="1"
                      {...register("videoStatus")}
                    />
                    <span className="ml-2 text-gray-700">News Has Video</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <hr className="bg-gray-300 my-12" id="section6" />

          <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
            News Paragraph
          </h2>

          <div className="p-8 rounded shadow bg-white" ref={section6}>
            <div className="" ref={paragraphRef}>
              <ParagraphFormField
                callback={(value: ParagraphInterface[]) => setParagraph(value)}
                paragraph={paragraph}
              />
            </div>
          </div>

          <hr className="bg-gray-300 my-12" id="section7" />

          <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
            Form Submit
          </h2>

          <div
            className="p-8 mt-6 lg:mt-0 rounded shadow bg-white"
            ref={section7}
          >
            <blockquote className="border-l-4 border-yellow-500 italic my-4 pl-8 py-2 md:pl-12 bg-gray-100">
              Please check all required information.
            </blockquote>

            {errors &&
              Object.values(errors).map((item, index) => {
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 border-red-600 italic my-4 pl-8 md:pl-12 bg-red-50"
                  >
                    <span className="capitalize">
                      {item && item?.message ? item.message.toString() : ""}
                    </span>
                  </blockquote>
                );
              })}

            <div className="pt-8">
              <button
                className="shadow bg-indigo-700 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </section>

        <div className="w-full md:w-5/6 lg:w-5/6 lg:ml-auto text-base md:text-sm text-gray-600 px-4 py-24 mb-12">
          <span className="text-base text-yellow-600 font-bold">&lt;</span>{" "}
          <a
            href="#"
            className="text-base md:text-sm text-yellow-600 font-bold no-underline hover:underline"
          >
            Back to top
          </a>
        </div>
      </div>

      <br />
    </form>
  );
}
