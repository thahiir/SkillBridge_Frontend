import { motion } from "framer-motion";
import clsx from "clsx";

const Card = ({

    children,

    title,

    subtitle,

    headerAction,

    footer,

    hover = true,

    bordered = false,

    padding = "md",

    className = "",

}) => {

    const paddingClasses = {

        none: "",

        sm: "p-4",

        md: "p-6",

        lg: "p-8",

    };

    return (

        <motion.div

            whileHover={

                hover

                    ? {

                          y: -4,

                          scale: 1.01,

                      }

                    : {}

            }

            transition={{

                duration: 0.25,

            }}

            className={clsx(

                "rounded-2xl bg-white shadow-md",

                bordered && "border border-slate-200",

                paddingClasses[padding],

                className

            )}

        >

            {(title || subtitle || headerAction) && (

                <div className="mb-5 flex items-start justify-between">

                    <div>

                        {title && (

                            <h3 className="text-xl font-semibold text-slate-900">

                                {title}

                            </h3>

                        )}

                        {subtitle && (

                            <p className="mt-1 text-sm text-slate-500">

                                {subtitle}

                            </p>

                        )}

                    </div>

                    {headerAction && (

                        <div>

                            {headerAction}

                        </div>

                    )}

                </div>

            )}

            <div>

                {children}

            </div>

            {footer && (

                <div className="mt-6 border-t border-slate-200 pt-4">

                    {footer}

                </div>

            )}

        </motion.div>

    );

};

export default Card;