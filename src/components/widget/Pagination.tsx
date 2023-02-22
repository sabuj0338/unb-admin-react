type Props = {
  next: Function;
  prev: Function;
  total?: number;
  page?: number;
  totalPages?: number;
  isNext: boolean;
  isPrev: boolean;
};

export default function Pagination({
  next,
  prev,
  page,
  total,
  totalPages,
  isNext,
  isPrev,
}: Props) {
  return (
    <ul className="flex justify-around space-x-2">
      <li>
        <button
          onClick={() => prev()}
          className={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline bg-indigo-200 ${
            !isPrev && " bg-indigo-400 "
          } ${isPrev && "hover:bg-white"}`}
          disabled={isPrev ? false : true}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
      <li>
        <button className="w-auto px-3 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline bg-indigo-100 hover:bg-indigo-100 truncate">
          {page} of {totalPages} pages, {total} items
        </button>
      </li>
      <li>
        <button
          onClick={() => next()}
          className={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline bg-indigo-200  ${
            !isNext && " bg-indigo-400 "
          } ${isNext && "hover:bg-white"}`}
          disabled={isNext ? false : true}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
  );
}
