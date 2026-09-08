import { motion } from "framer-motion";

const StatCard = ({ stat }) => {

    const Icon = stat.icon;

    return (

        <motion.div

            whileHover={{

                y: -6,

                scale: 1.02,

            }}

            transition={{

                duration: .25,

            }}

            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"

        >

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-slate-500">

                        {stat.title}

                    </p>

                    <h2 className="mt-3 text-3xl font-bold">

                        {stat.value}

                    </h2>

                </div>

                <div

                    className={`rounded-2xl bg-gradient-to-r ${stat.color} p-4 text-white`}

                >

                    <Icon size={28} />

                </div>

            </div>

        </motion.div>

    );

};

export default StatCard;