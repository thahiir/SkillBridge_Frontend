import { TriangleAlert } from "lucide-react";

const ConfirmModal = ({
    open,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    confirmColor = "bg-red-600 hover:bg-red-700",
    onConfirm,
    onCancel,
}) => {

    if (!open) return null;

    return (

        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/40
                backdrop-blur-sm
                p-4
            "
        >

            <div
                className="
                    w-full
                    max-w-md
                    rounded-3xl
                    bg-white
                    p-8
                    shadow-2xl
                "
            >

                <div className="flex justify-center">

                    <div
                        className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-full
                            bg-red-100
                        "
                    >

                        <TriangleAlert
                            size={34}
                            className="text-red-600"
                        />

                    </div>

                </div>

                <h2 className="mt-6 text-center text-2xl font-bold">

                    {title}

                </h2>

                <p className="mt-3 text-center text-slate-500">

                    {message}

                </p>

                <div className="mt-8 flex gap-4">

                    <button
                        type="button"
                        onClick={onCancel}
                        className="
                            flex-1
                            rounded-xl
                            border
                            border-slate-300
                            py-3
                            font-semibold
                            transition
                            hover:bg-slate-100
                        "
                    >
                        {cancelText}
                    </button>

                    <button
                        type="button"
                        onClick={onConfirm}
                        className={`
                            flex-1
                            rounded-xl
                            py-3
                            font-semibold
                            text-white
                            transition
                            ${confirmColor}
                        `}
                    >
                        {confirmText}
                    </button>

                </div>

            </div>

        </div>

    );

};

export default ConfirmModal;