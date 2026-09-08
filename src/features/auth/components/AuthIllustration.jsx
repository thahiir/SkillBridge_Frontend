import { motion } from "framer-motion";

import {
    CheckCircle2,
    Brain,
    Wallet,
    BarChart3,
    Target,
    Sparkles,
} from "lucide-react";

const features = [
    {
        icon: <Target size={20} />,
        title: "Task Management",
        color: "bg-indigo-500",
    },
    {
        icon: <Wallet size={20} />,
        title: "Expense Tracking",
        color: "bg-emerald-500",
    },
    {
        icon: <Brain size={20} />,
        title: "AI Assistant",
        color: "bg-violet-500",
    },
    {
        icon: <BarChart3 size={20} />,
        title: "Analytics Dashboard",
        color: "bg-cyan-500",
    },
];

const stats = [
    {
        label: "Tasks",
        value: "124",
    },
    {
        label: "Completed",
        value: "92%",
    },
    {
        label: "Saved",
        value: "₹18K",
    },
];

const floatingAnimation = {
    animate: {
        y: [0, -15, 0],
    },
    transition: {
        duration: 4,
        repeat: Infinity,
    },
};

const AuthIllustration = () => {
    return (
        <div className="relative flex h-full w-full overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-700 to-cyan-600 p-14 text-white">

            {/* Decorative Blur */}

            <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative z-10 flex w-full flex-col justify-between">

                {/* Header */}

                <div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: .7,
                        }}
                    >

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-lg">

                            <Sparkles size={18} />

                            <span className="text-sm">

                                Smart Productivity Platform

                            </span>

                        </div>

                        <h1 className="text-5xl font-extrabold leading-tight">

                            Organize

                            <br />

                            Work Smarter

                            <br />

                            With AI

                        </h1>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-indigo-100">

                            Manage tasks, monitor expenses,
                            receive AI-powered insights,
                            and increase your productivity
                            with one beautiful platform.

                        </p>

                    </motion.div>

                </div>

                {/* Feature Cards */}

                <div className="grid grid-cols-2 gap-5">

                    {features.map((feature, index) => (

                        <motion.div
                            key={feature.title}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * .15,
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                            }}
                            className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl"
                        >

                            <div
                                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${feature.color}`}
                            >

                                {feature.icon}

                            </div>

                            <h3 className="font-semibold text-lg">

                                {feature.title}

                            </h3>

                        </motion.div>

                    ))}

                </div>

            </div>

            {/* Floating Dashboard Card */}

            <motion.div
                {...floatingAnimation}
                className="absolute bottom-12 right-10 w-72 rounded-3xl border border-white/20 bg-white p-6 text-slate-900 shadow-2xl"
            >

                <div className="mb-5 flex items-center justify-between">

                    <h3 className="font-bold">

                        Productivity

                    </h3>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">

                        +18%

                    </span>

                </div>

                <div className="space-y-4">

                    {stats.map((item) => (

                        <div
                            key={item.label}
                            className="flex items-center justify-between"
                        >

                            <span className="text-slate-500">

                                {item.label}

                            </span>

                            <span className="font-bold">

                                {item.value}

                            </span>

                        </div>

                    ))}

                </div>

                <div className="mt-6 rounded-2xl bg-indigo-50 p-4">

                    <div className="flex items-center gap-3">

                        <CheckCircle2
                            className="text-green-600"
                            size={22}
                        />

                        <div>

                            <p className="font-semibold">

                                AI Suggestion

                            </p>

                            <p className="text-sm text-slate-500">

                                Complete 3 pending tasks today.

                            </p>

                        </div>

                    </div>

                </div>

            </motion.div>

        </div>
    );
};

export default AuthIllustration;