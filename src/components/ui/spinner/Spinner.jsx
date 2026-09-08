import clsx from "clsx";

const Spinner = ({

    size = "md",

    color = "primary",

    fullScreen = false,

    label,

    className = "",

}) => {

    const sizes = {

        xs: "h-4 w-4 border-2",

        sm: "h-6 w-6 border-2",

        md: "h-8 w-8 border-[3px]",

        lg: "h-12 w-12 border-4",

        xl: "h-16 w-16 border-4",

    };

    const colors = {

        primary: "border-indigo-600",

        secondary: "border-cyan-500",

        success: "border-emerald-500",

        danger: "border-red-500",

        white: "border-white",

    };

    const spinner = (

        <div className="flex flex-col items-center justify-center gap-3">

            <div

                className={clsx(

                    "animate-spin rounded-full",

                    "border-t-transparent",

                    sizes[size],

                    colors[color],

                    className

                )}

            />

            {label && (

                <p className="text-sm font-medium text-slate-500">

                    {label}

                </p>

            )}

        </div>

    );

    if (fullScreen) {

        return (

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">

                {spinner}

            </div>

        );

    }

    return spinner;

};

export default Spinner;