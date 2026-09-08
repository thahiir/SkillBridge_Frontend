import axiosInstance from "../../../api/axios";

// ==============================
// Get Logged-in User Profile
// ==============================

export const getProfile = async () => {

    const { data } = await axiosInstance.get(
        "/user/me"
    );

    return data;

};

// ==============================
// Update Profile
// ==============================

export const updateProfile = async (profileData) => {

    const { data } = await axiosInstance.put(
        "/user/profile",
        profileData
    );

    return data;

};

// ==============================
// Upload Profile Image
// ==============================

export const uploadProfileImage = async (file) => {

    const formData = new FormData();

    formData.append("profile", file);

    const { data } = await axiosInstance.post(
        "/user/upload-profile",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return data;

};

// ==============================
// Remove Profile Image
// ==============================

export const removeProfileImage = async () => {

    const { data } = await axiosInstance.delete(
        "/user/remove-profile"
    );

    return data;

};

// ==============================
// Change Password
// ==============================

export const changePassword = async (passwordData) => {

    const { data } = await axiosInstance.put(
        "/user/change-password",
        passwordData
    );

    return data;

};