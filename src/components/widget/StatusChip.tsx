type Props = {
  status: string;
};
export default function StatusChip({ status }: Props) {
  if (status.toLowerCase() === "pending") {
    return (
      <span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-orange-400">
        {status}
      </span>
    );
  }

  if (status.toLowerCase() === "completed") {
    return (
      <span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-green-400">
        {status}
      </span>
    );
  }

  if (status.toLowerCase() === "rejected") {
    return (
      <span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-red-400">
        {status}
      </span>
    );
  }

  if (status.toLowerCase() === "canceled") {
    return (
      <span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-yellow-400">
        {status}
      </span>
    );
  }


  return (
    <span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-gray-400">
      {status}
    </span>
  );
}
