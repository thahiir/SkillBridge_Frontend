import { motion } from "framer-motion";

const AuthCard = ({
    title,
    subtitle,
    children,
}) => {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 25,
            }}

            animate={{
                opacity: 1,
                y: 0,
            }}

            transition={{
                duration: .5,
            }}

            className="w-full"

        >

            <div className="mb-8 text-center">

                <h1 className="text-3xl font-bold text-slate-800">

                    {title}

                </h1>

                <p className="mt-3 text-slate-500">

                    {subtitle}

                </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

                {children}

            </div>

        </motion.div>

    );

};

export default AuthCard;