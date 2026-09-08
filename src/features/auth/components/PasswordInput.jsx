import { useState } from "react";

import {
    Eye,
    EyeOff,
    Lock,
} from "lucide-react";

const PasswordInput = ({
    label,
    error,
    ...props
}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (

        <div className="space-y-2">

            <label className="text-sm font-semibold text-slate-700">

                {label}

            </label>

            <div className="relative">

                <Lock

                    size={18}

                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"

                />

                <input

                    type={

                        showPassword

                            ? "text"

                            : "password"

                    }

                    {...props}

                    className={`

                        w-full

                        rounded-xl

                        border

                        ${

                            error

                                ? "border-red-500"

                                : "border-slate-300"

                        }

                        bg-slate-50

                        py-3

                        pl-12

                        pr-12

                        transition

                        focus:border-indigo-500

                        focus:ring-4

                        focus:ring-indigo-100

                    `}

                />

                <button

                    type="button"

                    onClick={() =>

                        setShowPassword(!showPassword)

                    }

                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"

                >

                    {

                        showPassword

                            ?

                            <EyeOff size={20} />

                            :

                            <Eye size={20} />

                    }

                </button>

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

export default PasswordInput;