import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessAnimation = ({
    title = "Success!",
    description = "Operation completed successfully.",
    redirectTo = "/login",
    redirectDelay = 3,
}) => {

    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(redirectDelay);

    useEffect(() => {

        if (countdown <= 0) {

            navigate(redirectTo, {
                replace: true,
            });

            return;

        }

        const timer = setTimeout(() => {

            setCountdown((prev) => prev - 1);

        }, 1000);

        return () => clearTimeout(timer);

    }, [
        countdown,
        navigate,
        redirectTo,
    ]);

    return (

        <motion.div

            initial={{
                opacity: 0,
                scale: .9,
            }}

            animate={{
                opacity: 1,
                scale: 1,
            }}

            transition={{
                duration: .5,
            }}

            className="mx-auto w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"

        >

            {/* Success Icon */}

            <motion.div

                initial={{
                    scale: 0,
                    rotate: -180,
                }}

                animate={{
                    scale: 1,
                    rotate: 0,
                }}

                transition={{
                    type: "spring",
                    stiffness: 180,
                }}

                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100"

            >

                <CircleCheckBig

                    size={55}

                    className="text-emerald-600"

                />

            </motion.div>

            {/* Title */}

            <motion.h2

                initial={{
                    opacity: 0,
                    y: 15,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                }}

                transition={{
                    delay: .2,
                }}

                className="mt-8 text-center text-3xl font-bold text-slate-800"

            >

                {title}

            </motion.h2>

            {/* Description */}

            <motion.p

                initial={{
                    opacity: 0,
                    y: 15,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                }}

                transition={{
                    delay: .3,
                }}

                className="mt-4 text-center text-slate-500"

            >

                {description}

            </motion.p>

            {/* Countdown */}

            <motion.div

                initial={{
                    opacity: 0,
                }}

                animate={{
                    opacity: 1,
                }}

                transition={{
                    delay: .5,
                }}

                className="mt-8 text-center"

            >

                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">

                    <span className="text-2xl font-bold text-indigo-700">

                        {countdown}

                    </span>

                </div>

                <p className="mt-4 text-sm text-slate-500">

                    Redirecting...

                </p>

            </motion.div>

        </motion.div>

    );

};

export default SuccessAnimation;