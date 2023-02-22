import { useState } from 'react';
import { Toaster } from 'react-hot-toast';


export default function AppLayout({ children }: any) {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <div className="">
            <div className="min-h-screen bg-gray-100 w-full pt-16 md:pt-32 lg:pt-32" onClick={() => showMenu && setShowMenu(!showMenu)}>
                {children}
            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    );
}
