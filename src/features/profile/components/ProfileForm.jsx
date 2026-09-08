import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import useUpdateProfile from "../hooks/useUpdateProfile";

// ==============================
// Validation Schema
// ==============================

const profileSchema = z.object({

    Fullname: z
        .string()
        .min(3, "Full name must be at least 3 characters"),

    Email: z
        .string()
        .email("Invalid email address"),

    PhoneNo: z
        .string()
        .min(10, "Phone number must be at least 10 digits"),

});

const ProfileForm = ({

    profile,

    onSuccess,

    onCancel,

}) => {

    const {

        register,

        handleSubmit,

        reset,

        formState: {

            errors,

        },

    } = useForm({

        resolver: zodResolver(profileSchema),

        defaultValues: {

            Fullname: "",

            Email: "",

            PhoneNo: "",

        },

    });

    const {

        update,

        loading,

    } = useUpdateProfile();

    useEffect(() => {

        if (profile) {

            reset({

                Fullname: profile.Fullname,

                Email: profile.Email,

                PhoneNo: profile.PhoneNo,

            });

        }

    }, [profile, reset]);

    const onSubmit = async (data) => {

        await update(data);

        onSuccess();

    };

    return (

        <form

            onSubmit={handleSubmit(onSubmit)}

            className="space-y-6"

        >

            {/* Full Name */}

            <div>

                <label className="mb-2 block font-medium">

                    Full Name

                </label>

                <input

                    {...register("Fullname")}

                    className="w-full rounded-xl border px-4 py-3"

                />

                <p className="mt-1 text-sm text-red-500">

                    {errors.Fullname?.message}

                </p>

            </div>

            {/* Email */}

            <div>

                <label className="mb-2 block font-medium">

                    Email

                </label>

                <input

                    {...register("Email")}

                    className="w-full rounded-xl border px-4 py-3"

                />

                <p className="mt-1 text-sm text-red-500">

                    {errors.Email?.message}

                </p>

            </div>

            {/* Phone */}

            <div>

                <label className="mb-2 block font-medium">

                    Phone Number

                </label>

                <input

                    {...register("PhoneNo")}

                    className="w-full rounded-xl border px-4 py-3"

                />

                <p className="mt-1 text-sm text-red-500">

                    {errors.PhoneNo?.message}

                </p>

            </div>

            {/* Buttons */}

            <div className="flex justify-end gap-4">

                <button

                    type="button"

                    onClick={onCancel}

                    className="rounded-xl border px-5 py-3"

                >

                    Cancel

                </button>

                <button

                    type="submit"

                    disabled={loading}

                    className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"

                >

                    {

                        loading

                            ? "Saving..."

                            : "Save Changes"

                    }

                </button>

            </div>

        </form>

    );

};

export default ProfileForm;