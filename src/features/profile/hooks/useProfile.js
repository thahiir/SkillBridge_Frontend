import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getProfile } from "../api/profileApi";

const useProfile = () => {

    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchProfile = async () => {

        try {

            setLoading(true);

            const response = await getProfile();

            setProfile(response.user);

            setError(null);

        } catch (err) {

            setError(err);

            toast.error(

                err.response?.data?.message ||

                "Failed to load profile."

            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchProfile();

    }, []);

    return {

        profile,

        loading,

        error,

        fetchProfile,

    };

};

export default useProfile;