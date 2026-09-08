import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../features/auth/components/Logo";
import AuthIllustration from "../features/auth/components/AuthIllustration";

const AuthLayout = () => {

    return (

        <div className="relative min-h-screen overflow-hidden bg-slate-50">

            {/* Background Gradient */}

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500" />

            {/* Decorative Blobs */}

            <motion.div

                animate={{
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.15, 1],
                }}

                transition={{
                    duration: 12,
                    repeat: Infinity,
                }}

                className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/10 blur-3xl"

            />

            <motion.div

                animate={{
                    x: [0, -50, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.2, 1],
                }}

                transition={{
                    duration: 15,
                    repeat: Infinity,
                }}

                className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-300/20 blur-3xl"

            />

            {/* Main Container */}

            <div className="relative z-10 flex min-h-screen items-center justify-center p-6">

                <div className="grid w-full max-w-7xl overflow-hidden rounded-3xl bg-white/10 shadow-2xl backdrop-blur-xl lg:grid-cols-2">

                    {/* Left Side */}

                    <div className="hidden lg:flex">

                        <AuthIllustration />

                    </div>

                    {/* Right Side */}

                    <div className="flex items-center justify-center bg-white px-8 py-12 sm:px-14">

                        <div className="w-full max-w-md">

                            <Logo />

                            <motion.div

                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                transition={{
                                    duration: .6,
                                }}

                            >

                                <Outlet />

                            </motion.div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default AuthLayout;