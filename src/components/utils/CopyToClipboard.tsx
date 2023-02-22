import toast from "react-hot-toast";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

type Props = {
  text?: string;
};
export const CopyToClipboard = ({ text }: Props) => {
  const hadleCopy = () => {
    navigator.clipboard.writeText(text ?? "");
    toast.success("Copied to clipboard!", {
      position: "bottom-center",
      className: "backdrop-filter backdrop-blur-lg bg-opacity-20",
      id: "clipboard",
    });
  };

  return (
    <span
      onClick={hadleCopy}
      className="cursor-pointer text-gray-500 hover:text-indigo-400"
    >
      <ContentCopyOutlinedIcon className="w-6 h-6"/>
    </span>
  );
};
