import { forwardRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Input = forwardRef(

    (

        {

            label,

            error,

            helperText,

            leftIcon,

            rightIcon,

            required = false,

            className = "",

            containerClassName = "",

            ...props

        },

        ref

    ) => {

        return (

            <div className={clsx("space-y-2", containerClassName)}>

                {label && (

                    <label className="block text-sm font-semibold text-slate-700">

                        {label}

                        {required && (

                            <span className="ml-1 text-red-500">*</span>

                        )}

                    </label>

                )}

                <motion.div

                    whileFocus={{ scale: 1.01 }}

                    className={clsx(

                        "flex items-center rounded-xl border bg-white transition-all duration-300",

                        error

                            ? "border-red-500"

                            : "border-slate-300 focus-within:border-indigo-500",

                        "focus-within:ring-4 focus-within:ring-indigo-100"

                    )}

                >

                    {leftIcon && (

                        <div className="pl-4 text-slate-400">

                            {leftIcon}

                        </div>

                    )}

                    <input

                        ref={ref}

                        className={clsx(

                            "w-full bg-transparent px-4 py-3 text-slate-800 outline-none",

                            leftIcon && "pl-3",

                            rightIcon && "pr-3",

                            className

                        )}

                        {...props}

                    />

                    {rightIcon && (

                        <div className="pr-4 text-slate-400">

                            {rightIcon}

                        </div>

                    )}

                </motion.div>

                {error ? (

                    <motion.p

                        initial={{ opacity: 0, y: -5 }}

                        animate={{ opacity: 1, y: 0 }}

                        className="text-sm font-medium text-red-500"

                    >

                        {error}

                    </motion.p>

                ) : helperText ? (

                    <p className="text-sm text-slate-500">

                        {helperText}

                    </p>

                ) : null}

            </div>

        );

    }

);

Input.displayName = "Input";

export default Input;