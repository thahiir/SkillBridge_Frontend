import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import {
    Lock,
    ShieldCheck,
} from "lucide-react";

import AuthCard from "../components/AuthCard";
import PasswordInput from "../components/PasswordInput";
import PasswordStrength from "../components/PasswordStrength";
import SuccessAnimation from "../components/SuccessAnimation";

import { resetPasswordSchema } from "../schemas/resetPasswordSchema";

import { resetPassword } from "../api/authApi";

const ResetPassword = () => {

    const navigate = useNavigate();

    const { token } = useParams();

    const [isSuccess, setIsSuccess] = useState(false);

    const [tokenError,setTokenError] = useState("");

    // ==========================
    // React Hook Form
    // ==========================

    const {

        register,

        handleSubmit,

        watch,

        formState: {

            errors,

            isSubmitting,

        },

    } = useForm({

        resolver: zodResolver(

            resetPasswordSchema

        ),
        shouldFocusError:true,

        defaultValues: {

            Password: "",

            ConfirmPassword: "",

        },

    });

    // ==========================
    // Live Password
    // ==========================

    const password = watch("Password");

    // ==========================
    // Submit Handler
    // ==========================

    // ==========================
// Token Validation
// ==========================

useEffect(() => {

            if (!token) {

                setTokenError(

                    "This password reset link is invalid or has expired."

                );

            }

        }, [token]);

        

    const onSubmit = async (data) => {
        if (!token) {

            toast.error(

                "Invalid password reset link."

            );

            return;

        }

        try {

            await resetPassword(

                token,

                data.Password

            );

            toast.success(

                "Password updated successfully."

            );

            setIsSuccess(true);

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Unable to reset password."

            );

        }

    };
        // ==========================
    // Success Screen
    // ==========================

    if (tokenError) {

    return (

        <AuthCard

            title="Invalid Link"

            subtitle="Password Reset"

        >

            <div className="space-y-6 text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">

                    <ShieldCheck

                        size={42}

                        className="text-red-500"

                    />

                </div>

                <p className="text-slate-600">

                    {tokenError}

                </p>

                <button

                    onClick={() => navigate("/forgot-password")}

                    className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"

                >

                    Request New Reset Link

                </button>

            </div>

        </AuthCard>

    );

}

    if (isSuccess) {

        return (

            <SuccessAnimation

                title="Password Updated"

                description="Your password has been updated successfully."

                redirectTo="/login"

                redirectDelay={3}

            />

        );

    }

    // ==========================
    // UI
    // ==========================

    return (

        <AuthCard

            title="Reset Password"

            subtitle="Create a strong password to secure your account."

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

                {/* Password */}

                <PasswordInput

                    autoComplete="new-password"

                    label="New Password"

                    placeholder="Enter your new password"

                    icon={

                        <Lock

                            size={18}

                        />

                    }

                    {...register("Password")}

                    error={

                        errors.Password?.message

                    }

                />

                {/* Password Strength */}

                <PasswordStrength

                    password={password}

                />

                {/* Confirm Password */}

                <PasswordInput

                    autoComplete="new-password"

                    label="Confirm Password"

                    placeholder="Re-enter your password"

                    icon={

                        <ShieldCheck

                            size={18}

                        />

                    }

                    {...register("ConfirmPassword")}

                    error={

                        errors.ConfirmPassword?.message

                    }

                />

                {/* Submit */}

                <motion.button

                    whileHover={{

                        scale: 1.02,

                    }}

                    whileTap={{

                        scale: .98,

                    }}

                    type="submit"

                    aria-label="Reset Password"

                    className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"

                    disabled={isSubmitting}

                >

                    {

                        isSubmitting

                            ?

                            "Updating Password..."

                            :

                            "Reset Password"

                    }

                </motion.button>

            </motion.form>

        </AuthCard>

    );
    };

export default ResetPassword;