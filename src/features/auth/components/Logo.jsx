import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Logo = ({ center = true }) => {

    return (

        <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-10 flex items-center gap-3 ${
                center ? "justify-center" : "justify-start"
            }`}
        >

            {/* Logo Icon */}

            <motion.div
                whileHover={{
                    rotate: 10,
                    scale: 1.08,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 shadow-xl"
            >

                <Sparkles
                    size={28}
                    className="text-white"
                />

            </motion.div>

            {/* Brand */}

            <Link to="/">

                <div>

                    <h1 className="text-3xl font-extrabold tracking-tight">

                        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">

                            Skill

                        </span>

                        <span className="text-slate-800">

                            Bridge

                        </span>

                    </h1>

                    <p className="-mt-1 text-xs tracking-[0.25em] text-slate-500 uppercase">

                        Productivity Platform

                    </p>

                </div>

            </Link>

        </motion.div>

    );

};

export default Logo;