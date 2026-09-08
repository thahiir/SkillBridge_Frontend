import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import AuthDivider from "../components/AuthDivider";

import { forgotPassword } from "../api/authApi";
import { forgotPasswordSchema } from "../schemas/forgotPasswordSchema";

import { useEffect, useRef, useState } from "react";

const ForgotPassword = () => {

    const {

        register,

        handleSubmit,

        formState: { errors, isSubmitting },

    } = useForm({

        resolver: zodResolver(forgotPasswordSchema),

    });

    useEffect(() => {

            if (!emailSent) {

                emailInputRef.current?.focus();

            }

        }, [emailSent]);

    const onSubmit = async (data) => {

        try {

            await forgotPassword(data.email);

            toast.success("Password reset link sent");

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Unable to send reset email"

            );

        }

    };

    return (

        <>

            {

                emailSent ? (

                    <SuccessCard

                        email={email}

                        countdown={countdown}

                        onResend={handleResend}

                        isResending={isResending}

                    />

                ) : (

                    <AuthCard

                        title="Forgot Password?"

                        subtitle="Enter your email address and we'll send you a password reset link."

                    >

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

                                duration: .5,

                            }}

                            onSubmit={handleSubmit(onSubmit)}

                            className="space-y-6"

                        >

                            {/* Email */}
<AuthInput

    ref={emailInputRef}

    label="Email Address"

    type="email"

    placeholder="Enter your email"

    autoComplete="email"

    aria-label="Email Address"

    icon={<Mail size={18} />}

    {...register("Email")}

    error={errors.Email?.message}

/>

                            {/* Button */}

                            <motion.button

    whileHover={{

        scale: 1.02,

    }}

    whileTap={{

        scale: .98,

    }}

    disabled={isSubmitting}

    type="submit"

    aria-label="Send Password Reset Link"

    className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"

>

    {

        isSubmitting

            ?

            "Sending Reset Link..."

            :

            "Send Reset Link"

    }

</motion.button>

                            {/* Divider */}

                            <div className="flex items-center">

                                <div className="flex-1 border-t border-slate-200" />

                                <span className="px-3 text-sm text-slate-400">

                                    OR

                                </span>

                                <div className="flex-1 border-t border-slate-200" />

                            </div>

                            {/* Back */}

                            <Link

                                to="/login"

                                className="flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 transition hover:text-indigo-800"

                            >

                                <ArrowLeft

                                    size={18}

                                />

                                Back to Login

                            </Link>

                        </motion.form>

                    </AuthCard>

                )

            }

        </>

    );

};

export default ForgotPassword;