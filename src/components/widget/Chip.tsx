
export enum ChipType {
    primary = 'primary',
    success = 'success',
    danger = 'danger',
    warning = 'warning',
    info = 'info',
    disabled = 'disabled',
    none = '',
  }

type Props = {
    type: ChipType;
    value: string;
};

export default function Chip({ type, value }: Props) {

    switch (type) {
        case ChipType.primary:
            return (<span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-blue-500">{value}</span>);

        case ChipType.success:
            return (<span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-green-500">{value}</span>);

        case ChipType.danger:
            return (<span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-red-500">{value}</span>);

        case ChipType.warning:
            return (<span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-amber-500">{value}</span>);

        case ChipType.info:
            return (<span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-blue-400">{value}</span>);

        case ChipType.disabled:
            return (<span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-gray-500">{value}</span>);
    
        default:
            return (<span className="py-0 px-2 uppercase text-xs text-white rounded-full bg-white">{value}</span>);
    }
}
