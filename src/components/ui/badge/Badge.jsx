import clsx from "clsx";

const Badge = ({

    children,

    variant = "primary",

    size = "md",

    rounded = true,

    outlined = false,

    icon,

    className = "",

}) => {

    const variants = {

        primary: outlined
            ? "border border-indigo-600 text-indigo-600 bg-transparent"
            : "bg-indigo-100 text-indigo-700",

        secondary: outlined
            ? "border border-cyan-600 text-cyan-600 bg-transparent"
            : "bg-cyan-100 text-cyan-700",

        success: outlined
            ? "border border-emerald-600 text-emerald-600 bg-transparent"
            : "bg-emerald-100 text-emerald-700",

        warning: outlined
            ? "border border-amber-600 text-amber-700 bg-transparent"
            : "bg-amber-100 text-amber-700",

        danger: outlined
            ? "border border-red-600 text-red-600 bg-transparent"
            : "bg-red-100 text-red-700",

        gray: outlined
            ? "border border-slate-400 text-slate-600 bg-transparent"
            : "bg-slate-100 text-slate-700",

    };

    const sizes = {

        sm: "px-2 py-1 text-xs",

        md: "px-3 py-1.5 text-sm",

        lg: "px-4 py-2 text-base",

    };

    return (

        <span

            className={clsx(

                "inline-flex items-center gap-1 font-semibold",

                rounded ? "rounded-full" : "rounded-lg",

                variants[variant],

                sizes[size],

                className

            )}

        >

            {icon && icon}

            {children}

        </span>

    );

};

export default Badge;