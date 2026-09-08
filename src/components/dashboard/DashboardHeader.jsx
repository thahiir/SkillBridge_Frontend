import { motion } from "framer-motion";

import Greeting from "./Greeting";

import CurrentDate from "./CurrentDate";

import QuickActions from "./QuickActions";

import motivationalQuotes from "./motivationalQuotes";

import useAuth from "/src/features/auth/hooks/useAuth.js";

const DashboardHeader = () => {

    const { user } = useAuth();

    const quote = motivationalQuotes[
        new Date().getDate() %
        motivationalQuotes.length
    ];

    return (

        <motion.div

            initial={{

                opacity: 0,

                y: 20,

            }}

            animate={{

                opacity: 1,

                y: 0,

            }}

            transition={{

                duration: .5,

            }}

            className="mb-8 flex flex-col gap-6 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 p-8 text-white shadow-xl md:flex-row md:items-center md:justify-between"

        >

            <div>

                <p className="text-sm opacity-90">

                    <Greeting />

                </p>

                <h1 className="mt-2 text-4xl font-bold">

                    Welcome back,

                    {" "}

                    {user?.Fullname || "User"}

                    👋

                </h1>

                <div className="mt-2">

                    <CurrentDate />

                </div>

                <p className="mt-4 max-w-xl text-indigo-100">

                    {quote}

                </p>

            </div>

            <QuickActions />

        </motion.div>

    );

};

export default DashboardHeader;