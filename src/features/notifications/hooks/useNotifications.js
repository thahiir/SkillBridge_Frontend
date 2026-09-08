import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getNotifications } from "../api/notificationApi";

const useNotifications = () => {

    const [notifications, setNotifications] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchNotifications = async () => {

        try {

            setLoading(true);

            const response = await getNotifications();

            setNotifications(response.notifications || []);

            setError(null);

        } catch (err) {

            setError(err);

            toast.error(

                err.response?.data?.message ||

                "Failed to load notifications."

            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchNotifications();

    }, []);

    return {

        notifications,

        loading,

        error,

        fetchNotifications,

    };

};

export default useNotifications;