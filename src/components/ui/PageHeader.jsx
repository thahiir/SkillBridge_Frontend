import { motion } from "framer-motion";

const PageHeader = ({
    title,
    subtitle,
    action
}) => {

    return (

        <motion.div

            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            className="flex flex-col md:flex-row justify-between items-center mb-8"

        >

            <div>

                <h1 className="text-3xl font-bold gradient-text">

                    {title}

                </h1>

                {

                    subtitle && (

                        <p className="text-slate-500 mt-2">

                            {subtitle}

                        </p>

                    )

                }

            </div>

            {action}

        </motion.div>

    );

};

export default PageHeader;