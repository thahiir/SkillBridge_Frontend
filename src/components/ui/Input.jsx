import clsx from "clsx";

const Input = ({
    label,
    error,
    className = "",
    ...props
}) => {

    return (

        <div className="space-y-2">

            {label && (

                <label className="font-medium">

                    {label}

                </label>

            )}

            <input

                className={clsx(

                    "w-full rounded-xl border border-slate-300 px-4 py-3",

                    "focus:border-indigo-600",

                    "focus:ring-2 focus:ring-indigo-200",

                    className

                )}

                {...props}

            />

            {

                error && (

                    <p className="text-red-500 text-sm">

                        {error}

                    </p>

                )

            }

        </div>

    );

};

export default Input;