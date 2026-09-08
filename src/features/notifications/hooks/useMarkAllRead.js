import toast from "react-hot-toast";
import { markAllNotificationsAsRead } from "../api/notificationApi";

const useMarkAllRead = () => {

    const markAllRead = async () => {

        try {

            const response = await markAllNotificationsAsRead();

            toast.success(
                response.message || "All notifications marked as read."
            );

            return response;

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Failed to mark all notifications as read."
            );

            throw err;

        }

    };

    return {

        markAllRead,

    };

};

export default useMarkAllRead;