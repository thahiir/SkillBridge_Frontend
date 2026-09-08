import { motion } from "framer-motion";
import { MailCheck, ArrowLeft, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const maskEmail = (email) => {

    if (!email) return "";

    const [username, domain] = email.split("@");

    if (!domain) return email;

    const visible = username.slice(0, 3);

    return `${visible}${"*".repeat(
        Math.max(username.length - 3, 3)
    )}@${domain}`;

};

const SuccessCard = ({
    email,
    countdown = 30,
    onResend,
    isResending = false,
}) => {

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

            className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-xl"

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

                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-600 shadow-lg"

            >

                <MailCheck
                    size={38}
                    className="text-white"
                />

            </motion.div>

            {/* Heading */}

            <h2 className="text-center text-3xl font-bold text-slate-800">

                Email Sent Successfully

            </h2>

            <p className="mt-4 text-center text-slate-500">

                We've sent a password reset link to

            </p>

            <p className="mt-2 text-center text-lg font-semibold text-indigo-600 break-all">

                {maskEmail(email)}

            </p>

            {/* Info Box */}

            <div className="mt-8 rounded-2xl bg-indigo-50 p-5">

                <ul className="space-y-3 text-sm text-slate-600">

                    <li>

                        ✓ Check your Inbox

                    </li>

                    <li>

                        ✓ Check Spam/Junk folder

                    </li>

                    <li>

                        ✓ Link expires after 10 minutes

                    </li>

                </ul>

            </div>

            {/* Countdown */}

            <div className="mt-8 text-center">

                {

                    countdown > 0

                    ? (

                        <p className="text-sm text-slate-500">

                            Didn't receive it?

                            <br />

                            You can resend in

                            <span className="ml-1 font-semibold text-indigo-600">

                                {countdown}s

                            </span>

                        </p>

                    )

                    : (

                        <button

                            onClick={onResend}

                            disabled={isResending}

                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"

                        >

                            <RotateCcw size={18} />

                            {

                                isResending

                                ?

                                "Sending..."

                                :

                                "Resend Email"

                            }

                        </button>

                    )

                }

            </div>

            {/* Back */}

            <div className="mt-8 text-center">

                <Link

                    to="/login"

                    className="inline-flex items-center gap-2 text-indigo-600 transition hover:text-indigo-800"

                >

                    <ArrowLeft size={18} />

                    Back to Login

                </Link>

            </div>

        </motion.div>

    );

};

export default SuccessCard;