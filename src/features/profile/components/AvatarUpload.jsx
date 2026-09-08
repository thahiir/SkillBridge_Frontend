import { useState } from "react";
import toast from "react-hot-toast";
import { Camera, Trash2 } from "lucide-react";

import {
    uploadProfileImage,
    removeProfileImage,
} from "../api/profileApi";

const AvatarUpload = ({

    profile,

    fetchProfile,

}) => {

    const [loading, setLoading] = useState(false);

    const handleUpload = async (e) => {

        const file = e.target.files[0];

        if (!file) return;

        try {

            setLoading(true);

            await uploadProfileImage(file);

            toast.success("Profile image updated.");

            fetchProfile();

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Upload failed."
            );

        } finally {

            setLoading(false);

        }

    };

    const handleRemove = async () => {

        try {

            setLoading(true);

            await removeProfileImage();

            toast.success(
                "Profile image removed."
            );

            fetchProfile();

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Unable to remove image."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <div className="flex flex-col items-center">

                <img

                    src={
                        profile?.profileImage ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            profile?.Fullname || "User"
                        )}`
                    }

                    alt="Profile"

                    className="h-36 w-36 rounded-full border-4 border-indigo-100 object-cover"

                />

                <label
                    className="
                        mt-6
                        cursor-pointer
                        rounded-xl
                        bg-indigo-600
                        px-5
                        py-3
                        font-medium
                        text-white
                        transition
                        hover:bg-indigo-700
                    "
                >

                    <Camera
                        size={18}
                        className="mr-2 inline"
                    />

                    {

                        loading

                            ? "Uploading..."

                            : "Change Photo"

                    }

                    <input

                        type="file"

                        accept="image/*"

                        hidden

                        onChange={handleUpload}

                    />

                </label>

                {

                    profile?.profileImage && (

                        <button

                            onClick={handleRemove}

                            disabled={loading}

                            className="
                                mt-4
                                flex
                                items-center
                                gap-2
                                text-red-600
                                hover:text-red-700
                            "

                        >

                            <Trash2 size={18} />

                            Remove Photo

                        </button>

                    )

                }

            </div>

        </div>

    );

};

export default AvatarUpload;