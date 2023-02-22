type Props = {
  onChange: Function;
  value: boolean;
};

export default function Switch({ onChange, value }: Props) {
  return (
    <div>
      <label className="flex items-center relative w-max cursor-pointer select-none z-0">
        <input
          onChange={() => onChange()}
          checked={value}
          type="checkbox"
          className={`appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none ring-2 ring-offset-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500 bg-gray-300 ${
            value ? " ring-green-300" : " ring-gray-300"
          }`}
        />
        <span className="absolute font-medium text-xs uppercase right-1 text-white">
          {" "}
          OFF{" "}
        </span>
        <span className="absolute font-medium text-xs uppercase right-8 text-white">
          {" "}
          ON{" "}
        </span>
        <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-100" />
      </label>
    </div>
  );
}
