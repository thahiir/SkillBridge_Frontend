import { motion } from "framer-motion";

const AuthDivider = ({ text = "OR" }) => {

    return (

        <motion.div

            initial={{
                opacity: 0,
            }}

            animate={{
                opacity: 1,
            }}

            transition={{
                delay: .3,
            }}

            className="relative my-8"

        >

            <div className="absolute inset-0 flex items-center">

                <div className="w-full border-t border-slate-300" />

            </div>

            <div className="relative flex justify-center">

                <span className="rounded-full bg-white px-4 text-sm font-medium text-slate-500">

                    {text}

                </span>

            </div>

        </motion.div>

    );

};

export default AuthDivider;