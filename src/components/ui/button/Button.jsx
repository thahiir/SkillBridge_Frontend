import { motion } from "framer-motion";
import clsx from "clsx";

const Button = ({

    children,

    type = "button",

    variant = "primary",

    size = "md",

    fullWidth = false,

    loading = false,

    disabled = false,

    leftIcon,

    rightIcon,

    className = "",

    onClick,

}) => {

    const baseClasses =

        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 disabled:cursor-not-allowed";

    const variants = {

        primary:
            "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg focus:ring-indigo-200",

        secondary:
            "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg focus:ring-cyan-200",

        success:
            "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg focus:ring-emerald-200",

        danger:
            "bg-red-600 hover:bg-red-700 text-white shadow-lg focus:ring-red-200",

        outline:
            "border border-slate-300 bg-white hover:bg-slate-100 text-slate-800",

        ghost:
            "bg-transparent hover:bg-slate-100 text-slate-700",

    };

    const sizes = {

        sm: "px-3 py-2 text-sm",

        md: "px-5 py-3 text-base",

        lg: "px-7 py-4 text-lg",

    };

    return (

        <motion.button

            whileHover={!disabled && !loading ? { scale: 1.02 } : {}}

            whileTap={!disabled && !loading ? { scale: 0.98 } : {}}

            type={type}

            onClick={onClick}

            disabled={disabled || loading}

            className={clsx(

                baseClasses,

                variants[variant],

                sizes[size],

                fullWidth && "w-full",

                (disabled || loading) &&

                    "opacity-70",

                className

            )}

        >

            {loading ? (

                <>

                    <svg

                        className="h-5 w-5 animate-spin"

                        viewBox="0 0 24 24"

                        fill="none"

                    >

                        <circle

                            cx="12"

                            cy="12"

                            r="10"

                            stroke="currentColor"

                            strokeWidth="4"

                            className="opacity-25"

                        />

                        <path

                            d="M22 12a10 10 0 00-10-10"

                            stroke="currentColor"

                            strokeWidth="4"

                            className="opacity-75"

                        />

                    </svg>

                    Loading...

                </>

            ) : (

                <>

                    {leftIcon}

                    {children}
                    {rightIcon}

                </>

            )}

        </motion.button>

    );

};

export default Button;