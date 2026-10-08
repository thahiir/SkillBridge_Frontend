import api from "../../../api/axios";

// ==========================
// REGISTER
// ==========================

export const registerUser = async (userData) => {

    const { data } = await api.post(
        "/api/user/register",
        userData
    );

    return data;

};

// ==========================
// LOGIN
// ==========================

export const loginUser = async (credentials) => {

    const { data } = await api.post(
        "/api/user/login",
        credentials
    );

    return data;

};

// ==========================
// FORGOT PASSWORD
// ==========================

export const forgotPassword = async (email) => {

    const { data } = await api.post(
        "/api/user/forgot-password",
        {
            Email: email,
        }
    );

    return data;

};

// ==========================
// RESET PASSWORD
// ==========================

export const resetPassword = async (
    token,
    password
) => {

    const { data } = await api.post(

        `/api/user/reset-password/${token}`,

        {
            Password: password,
        }

    );

    return data;

};

// ==========================
// CURRENT USER
// ==========================

export const getCurrentUser = async () => {

    const { data } = await api.get(
        "/api/user/me"
    );

    return data;

};