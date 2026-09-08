import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    User,
} from "lucide-react";

import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import PasswordInput from "../components/PasswordInput";
import PasswordStrength from "../components/PasswordStrength";

import { registerSchema } from "../schemas/registerSchema";
import useAuth from "../hooks/useAuth";

const Register = () => {

    const navigate = useNavigate();
    const { register: registerUser } = useAuth();

    const {

        register,

        handleSubmit,

        watch,

        formState: {

            errors,

            isSubmitting,

        },

    } = useForm({

        resolver: zodResolver(registerSchema),

    });

    const password = watch("Password");

    const onSubmit = async (data) => {

            try {

                const response = await registerUser({
                    Fullname: data.Fullname,
                    Email: data.Email,
                    PhoneNo: data.PhoneNo,
                    Password: data.Password,
                });

                console.log("Registration response:", response);

                if (response?.success) {

                    navigate("/login", {
                        replace: true,
                        state: {
                            message:
                                "Account created successfully. Please login.",
                        },
                    });

                }

            } catch (error) {

                console.error(
                    "Registration Error:",
                    error
                );

            }
        };

    return (

        <AuthCard

            title="Create Account 🚀"

            subtitle="Start your productivity journey"

        >

            <form

                onSubmit={handleSubmit(onSubmit)}

                className="space-y-5"

            >

                <AuthInput

                    label="Full Name"

                    placeholder="Enter your name"

                    icon={<User size={18}/>}

                    {...register("Fullname")}

                    error={errors.Fullname?.message}

                />

                <AuthInput

                    label="Email"

                    placeholder="Enter your email"

                    icon={<Mail size={18}/>}

                    {...register("Email")}

                    error={errors.Email?.message}

                />

                <AuthInput
                    label="Phone Number"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    icon={<Phone size={18} />}
                    {...register("PhoneNo")}
                    error={errors.PhoneNo?.message}
                />

                <PasswordInput

                    label="Password"

                    placeholder="Create password"

                    {...register("Password")}

                    error={errors.Password?.message}

                />

                <PasswordStrength

                    password={password}

                />

                <PasswordInput

                    label="Confirm Password"

                    placeholder="Confirm password"

                    {...register("ConfirmPassword")}

                    error={errors.ConfirmPassword?.message}

                />

                <label className="flex items-start gap-3 text-sm">

                    <input

                        type="checkbox"

                        {...register("terms")}

                        className="mt-1 h-4 w-4 accent-indigo-600"

                    />

                    <span>

                        I agree to the

                        <span className="font-semibold text-indigo-600">

                            {" "}Terms & Conditions

                        </span>

                    </span>

                </label>

                {errors.terms && (

                    <p className="text-sm text-red-500">

                        {errors.terms.message}

                    </p>

                )}

                <motion.button

                    whileHover={{ scale:1.02 }}

                    whileTap={{ scale:.98 }}

                    disabled={isSubmitting}

                    className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 py-3 font-semibold text-white shadow-lg"

                >

                    {

                        isSubmitting

                        ?

                        "Creating Account..."

                        :

                        "Create Account"

                    }

                </motion.button>

            </form>

            <div className="mt-8 text-center">

                <span className="text-slate-500">

                    Already have an account?

                </span>

                <Link

                    to="/login"

                    className="ml-2 font-semibold text-indigo-600"

                >

                    Login

                </Link>

            </div>

        </AuthCard>

    );

};

export default Register;