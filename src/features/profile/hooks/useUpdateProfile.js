import { useState } from "react";
import toast from "react-hot-toast";

import { updateProfile } from "../api/profileApi";

const useUpdateProfile = () => {

    const [loading, setLoading] = useState(false);

    const update = async (profileData) => {

        try {

            setLoading(true);

            const response = await updateProfile(profileData);

            toast.success(
                response.message || "Profile updated successfully."
            );

            return response;

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Failed to update profile."
            );

            throw err;

        } finally {

            setLoading(false);

        }

    };

    return {

        update,

        loading,

    };

};

export default useUpdateProfile;