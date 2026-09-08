import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import PasswordInput from "../components/PasswordInput";
import SocialLogin from "../components/SocialLogin";

import { loginSchema } from "../schemas/loginSchema";
import useAuth from "../hooks/useAuth";

const Login = () => {

    const { login } = useAuth();

    const rememberedEmail = localStorage.getItem("rememberEmail");

    const {

        register,

        handleSubmit,

        watch,

        setValue,

        formState: {

            errors,

            isSubmitting,

        },

    } = useForm({

        resolver: zodResolver(loginSchema),

        defaultValues: {

            Email: "",

            Password: "",

            remember: false,

        },

    });

    useEffect(() => {

        if (rememberedEmail) {

            setValue("Email", rememberedEmail);

            setValue("remember", true);

        }

    }, []);

    const remember = watch("remember");

    const onSubmit = async (data) => {

        if (remember) {

            localStorage.setItem(

                "rememberEmail",

                data.Email

            );

        }

        else {

            localStorage.removeItem(

                "rememberEmail"

            );

        }

        await login({

            Email: data.Email,

            Password: data.Password,

        });

    };

    return (

        <AuthCard

            title="Welcome Back 👋"

            subtitle="Login to continue using SkillBridge"

        >

            <form

                onSubmit={handleSubmit(onSubmit)}

                className="space-y-6"

            >

                <AuthInput

                    label="Email Address"

                    type="email"

                    placeholder="Enter your email"

                    icon={<Mail size={18} />}

                    {...register("Email")}

                    error={errors.Email?.message}

                />

                <PasswordInput

                    label="Password"

                    placeholder="Enter your password"

                    {...register("Password")}

                    error={errors.Password?.message}

                />

                <div className="flex items-center justify-between">

                    <label className="flex items-center gap-2 text-sm">

                        <input

                            type="checkbox"

                            {...register("remember")}

                            className="h-4 w-4 rounded accent-indigo-600"

                        />

                        Remember Me

                    </label>

                    <Link

                        to="/forgot-password"

                        className="text-sm font-medium text-indigo-600 hover:text-indigo-700"

                    >

                        Forgot Password?

                    </Link>

                </div>

                <motion.button

                    whileHover={{

                        scale: 1.02,

                    }}

                    whileTap={{

                        scale: .98,

                    }}

                    disabled={isSubmitting}

                    className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl disabled:opacity-70"

                >

                    {

                        isSubmitting

                            ?

                            "Signing In..."

                            :

                            "Login"

                    }

                </motion.button>

            </form>

            <SocialLogin />

            <div className="mt-8 text-center text-sm">

                <span className="text-slate-500">

                    Don't have an account?

                </span>

                <Link

                    to="/register"

                    className="ml-2 font-semibold text-indigo-600 hover:text-indigo-700"

                >

                    Register

                </Link>

            </div>

        </AuthCard>

    );

};

export default Login;