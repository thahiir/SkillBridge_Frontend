import { motion } from "framer-motion";
import clsx from "clsx";
import { Camera, CheckCircle2 } from "lucide-react";

const Avatar = ({

    src,

    name = "",

    alt = "Avatar",

    size = "md",

    status,

    verified = false,

    editable = false,

    onClick,

    className = "",

}) => {

    const sizes = {

        xs: "w-8 h-8 text-xs",

        sm: "w-10 h-10 text-sm",

        md: "w-14 h-14 text-base",

        lg: "w-20 h-20 text-xl",

        xl: "w-28 h-28 text-2xl",

    };

    const statusColors = {

        online: "bg-green-500",

        offline: "bg-slate-400",

        busy: "bg-red-500",

        away: "bg-yellow-400",

    };

    const initials = name
        ? name
              .trim()
              .split(" ")
              .map((word) => word[0])
              .join("")
              .substring(0, 2)
              .toUpperCase()
        : "?";

    return (

        <motion.div

            whileHover={{ scale: 1.05 }}

            whileTap={{ scale: 0.98 }}

            onClick={onClick}

            className={clsx(

                "relative inline-flex cursor-pointer",

                className

            )}

        >

            <div

                className={clsx(

                    sizes[size],

                    "overflow-hidden rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500",

                    "flex items-center justify-center",

                    "font-bold text-white",

                    "shadow-lg"

                )}

            >

                {src ? (

                    <img

                        src={src}

                        alt={alt}

                        className="h-full w-full object-cover"

                    />

                ) : (

                    initials

                )}

            </div>

            {status && (

                <span

                    className={clsx(

                        "absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white",

                        statusColors[status]

                    )}

                />

            )}

            {verified && (

                <CheckCircle2

                    size={18}

                    className="absolute -right-1 -top-1 text-blue-500"

                />

            )}

            {editable && (

                <div

                    className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg"

                >

                    <Camera size={15} />

                </div>

            )}

        </motion.div>

    );

};

export default Avatar;