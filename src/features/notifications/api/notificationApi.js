import axiosInstance from "../../../api/axios";

// Get All Notifications
export const getNotifications = async (params = {}) => {

    const { data } = await axiosInstance.get(
        "/notification",
        { params }
    );

    return data;
};

// Mark Notification as Read
export const markNotificationAsRead = async (id) => {

    const { data } = await axiosInstance.patch(
        `/notification/${id}/read`
    );

    return data;
};

// Mark All Notifications as Read
export const markAllNotificationsAsRead = async () => {

    const { data } = await axiosInstance.patch(
        "/notification/read-all"
    );

    return data;
};

// Delete Notification
export const deleteNotification = async (id) => {

    const { data } = await axiosInstance.delete(
        `/notification/${id}`
    );

    return data;
};

//Notification Summary

export const getNotificationSummary = async () => {

    const { data } = await axiosInstance.get(
        "/notification/summary"
    );

    return data;

};