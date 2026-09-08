import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle, children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
            <div>
                <h1 className="text-3xl font-bold text-slate-800">
                    {title}
                </h1>

                {subtitle && (
                    <p className="mt-2 text-slate-500">
                        {subtitle}
                    </p>
                )}
            </div>

            {children && (
                <div>
                    {children}
                </div>
            )}
        </motion.div>
    );
};

export default PageHeader;