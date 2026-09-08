import {

    X,

} from "lucide-react";

const ModalHeader = ({

    title,

    subtitle,

    onClose,

}) => {

    return (

        <div className="flex items-start justify-between border-b p-6">

            <div>

                <h2 className="text-2xl font-bold">

                    {title}

                </h2>

                {

                    subtitle && (

                        <p className="mt-1 text-slate-500">

                            {subtitle}

                        </p>

                    )

                }

            </div>

            <button

                onClick={onClose}

                className="rounded-lg p-2 hover:bg-slate-100"

            >

                <X size={22} />

            </button>

        </div>

    );

};

export default ModalHeader;