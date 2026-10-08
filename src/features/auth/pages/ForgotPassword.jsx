import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";

import toast from "react-hot-toast";

import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";

import { forgotPassword } from "../api/authApi";
import { forgotPasswordSchema } from "../schemas/forgotPasswordSchema";

const ForgotPassword = () => {

    const [emailSent, setEmailSent] = useState(false);

    const [email, setEmail] = useState("");

    const [countdown, setCountdown] = useState(60);

    const [isResending, setIsResending] = useState(false);

    const {
        register,
        handleSubmit,
        setFocus,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            Email: "",
        },
    });

    // Focus email input
    useEffect(() => {

        if (!emailSent) {
            setFocus("Email");
        }

    }, [emailSent, setFocus]);


    // Resend countdown
    useEffect(() => {

        if (!emailSent || countdown <= 0) {
            return;
        }

        const timer = setTimeout(() => {

            setCountdown((prev) => prev - 1);

        }, 1000);

        return () => clearTimeout(timer);

    }, [emailSent, countdown]);


    // Submit reset request
    const onSubmit = async (data) => {

        try {

            await forgotPassword(data.Email);

            setEmail(data.Email);

            setEmailSent(true);

            setCountdown(60);

            toast.success("Password reset link sent");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to send reset email"
            );

        }

    };


    // Resend reset link
    const handleResend = async () => {

        if (countdown > 0 || isResending) {
            return;
        }

        try {

            setIsResending(true);

            await forgotPassword(email);

            setCountdown(60);

            toast.success("Reset link sent again");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to resend reset link"
            );

        } finally {

            setIsResending(false);

        }

    };


    return (

        <AuthCard

            title={
                emailSent
                    ? "Check Your Email 📩"
                    : "Forgot Password?"
            }

            subtitle={
                emailSent
                    ? "We've sent a password reset link to your email."
                    : "Enter your email address and we'll send you a password reset link."
            }

        >

            {emailSent ? (

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
                        duration: 0.5,
                    }}

                    className="space-y-6 text-center"

                >

                    <div className="flex justify-center">

                        <CheckCircle2
                            size={64}
                            className="text-green-500"
                        />

                    </div>

                    <p className="text-sm text-slate-600">

                        We've sent a password reset link to

                        <br />

                        <span className="font-semibold text-slate-800">

                            {email}

                        </span>

                    </p>

                    <p className="text-sm text-slate-500">

                        Didn't receive the email?

                    </p>

                    <button

                        type="button"

                        onClick={handleResend}

                        disabled={
                            countdown > 0 ||
                            isResending
                        }

                        className="font-medium text-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"

                    >

                        {isResending

                            ? "Resending..."

                            : countdown > 0

                                ? `Resend in ${countdown}s`

                                : "Resend Reset Link"

                        }

                    </button>

                    <Link

                        to="/login"

                        className="flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"

                    >

                        <ArrowLeft size={18} />

                        Back to Login

                    </Link>

                </motion.div>

            ) : (

                <motion.form

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.5,
                    }}

                    onSubmit={handleSubmit(onSubmit)}

                    className="space-y-6"

                >

                    <AuthInput

                        label="Email Address"

                        type="email"

                        placeholder="Enter your email"

                        autoComplete="email"

                        icon={<Mail size={18} />}

                        {...register("Email")}

                        error={errors.Email?.message}

                    />

                    <motion.button

                        whileHover={{
                            scale: 1.02,
                        }}

                        whileTap={{
                            scale: 0.98,
                        }}

                        disabled={isSubmitting}

                        type="submit"

                        className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"

                    >

                        {isSubmitting

                            ? "Sending Reset Link..."

                            : "Send Reset Link"

                        }

                    </motion.button>

                    <div className="flex items-center">

                        <div className="flex-1 border-t border-slate-200" />

                        <span className="px-3 text-sm text-slate-400">

                            OR

                        </span>

                        <div className="flex-1 border-t border-slate-200" />

                    </div>

                    <Link

                        to="/login"

                        className="flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 transition hover:text-indigo-800"

                    >

                        <ArrowLeft size={18} />

                        Back to Login

                    </Link>

                </motion.form>

            )}

        </AuthCard>

    );

};

export default ForgotPassword;