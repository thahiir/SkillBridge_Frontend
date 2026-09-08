import clsx from "clsx";
import { motion } from "framer-motion";

const Card = ({
    children,
    className = ""
}) => {

    return (

        <motion.div

            whileHover={{ y: -4 }}

            transition={{ duration: .25 }}

            className={clsx(

                "bg-white rounded-3xl shadow-lg border border-slate-200 p-6",

                className

            )}

        >

            {children}

        </motion.div>

    );

};

export default Card;