import { CopyToClipboard } from "../utils/CopyToClipboard";

type ListTileType = {
  title: string;
  subtitle: string;
  isClipboard?: boolean;
};

export default function ListTile({
  title,
  subtitle,
  isClipboard,
}: ListTileType) {
  return (
    <div className="w-full flex items-center justify-between p-2 rounded-md hover:bg-green-100 hover:shadow border-2 border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-green-400/80">
      <div className="lg:flex md:flex items-center">
        {/* <div className="h-12 w-12 mb-2 lg:mb-0 border md:mb-0 rounded-full mr-3"></div> */}

        <div className="flex flex-col">
          <h1 className="text-sm leading-3 text-gray-700 font-bold w-full">
            {title}
          </h1>
          <p className="text-gray-600 w-full break-all">{subtitle}</p>
        </div>
      </div>
      {isClipboard && <CopyToClipboard text={subtitle} />}
    </div>
  );
}
