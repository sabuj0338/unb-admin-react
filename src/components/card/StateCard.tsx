import { Toaster } from 'react-hot-toast';


export default function StateCard({ title, state, icon }: any) {
    return (
        <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
            <div className="flex flex-col items-center">
                <div className="flex-shrink pr-4">
                    <div className="rounded-full p-3 bg-gray-300">
                        {icon}
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-3xl">
                        {state}
                    </h3>
                    <h5 className="font-bold text-gray-500">{title}</h5>
                </div>
            </div>
        </div>
    );
}
