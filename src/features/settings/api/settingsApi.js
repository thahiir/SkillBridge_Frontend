import axiosInstance from "../../../api/axios";

export const changePassword = async (passwordData) => {

    const { data } = await axiosInstance.put(
        "/user/change-password",
        passwordData
    );

    return data;

};