import { X } from "lucide-react";

import Sidebar from "./Sidebar";

const MobileSidebar = ({

    isOpen,

    onClose,

}) => {

    if (!isOpen) return null;

    return (

        <>

            {/* Backdrop */}

            <div

                className="fixed inset-0 z-40 bg-black/40 lg:hidden"

                onClick={onClose}

            />

            {/* Sidebar */}

            <div

                className="
                    fixed
                    left-0
                    top-0
                    z-50
                    h-screen
                    w-72
                    bg-slate-900
                    lg:hidden
                "

            >

                <button

                    onClick={onClose}

                    className="
                        absolute
                        right-4
                        top-4
                        rounded-lg
                        p-2
                        text-white
                        hover:bg-slate-800
                    "

                >

                    <X size={22} />

                </button>

                <Sidebar />

            </div>

        </>

    );

};

export default MobileSidebar;