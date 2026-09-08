import clsx from "clsx";

const AuthInput = ({
    label,
    error,
    icon,
    ...props
}) => {

    return (

        <div className="space-y-2">

            <label className="text-sm font-semibold text-slate-700">

                {label}

            </label>

            <div className="relative">

                {

                    icon && (

                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">

                            {icon}

                        </div>

                    )

                }

                <input

                    {...props}

                    className={clsx(

                        "w-full rounded-xl border bg-slate-50 py-3 transition",

                        icon ? "pl-12 pr-4" : "px-4",

                        error

                            ? "border-red-500"

                            : "border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"

                    )}

                />

            </div>

            {

                error && (

                    <p className="text-sm text-red-500">

                        {error}

                    </p>

                )

            }

        </div>

    );

};

export default AuthInput;