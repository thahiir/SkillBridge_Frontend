import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCallback } from "react";

import useAuthStore from "../../../store/authStore";

import {
    loginUser,
    registerUser,
    getCurrentUser,
} from "../api/authApi";

const useAuth = () => {

    const navigate = useNavigate();

    const loginStore = useAuthStore(
        (state) => state.login
    );

    const logoutStore = useAuthStore(
        (state) => state.logout
    );

    const setUser = useAuthStore(
        (state) => state.setUser
    );

    const setLoading = useAuthStore(
        (state) => state.setLoading
    );

    // ===========================
    // LOGIN
    // ===========================

    const login = async (credentials) => {

        try {

            const response = await loginUser(credentials);

            loginStore(
                response.user,
                response.token
            );

            toast.success("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    // ===========================
    // REGISTER
    // ===========================

    const register = async (userData) => {

            try {

                const response = await registerUser(userData);

                console.log("Registration API Response:", response);

                if (!response?.user) {
                    throw new Error("Invalid registration response");
                }

                if (!response?.token) {
                    throw new Error("Registration successful, but JWT token was not returned");
                }

                loginStore(
                    response.user,
                    response.token
                );

                toast.success("Registration Successful");

                navigate("/dashboard");

                return response;

            } catch (error) {

                console.error(
                    "Registration Error:",
                    error
                );

                toast.error(
                    error.response?.data?.message ||
                    error.message ||
                    "Registration Failed"
                );

                throw error;
            }
        };

    // ===========================
    // LOGOUT
    // ===========================

    const logout = () => {

        logoutStore();

        toast.success("Logged Out");

        navigate("/login",{
            replace:true,
        });

    };[logoutStore, navigate]

    // ===========================
    // FETCH USER
    // ===========================

    const fetchUser = useCallback(async () => {

        try {

            setLoading(true);

            const response = await getCurrentUser();

            setUser(response.user);

        } catch (error) {

            console.error("Fetch user failed:", error);

            logoutStore();

        } finally {

            setLoading(false);

        }

    }, [setLoading, setUser, logoutStore]);

    return {

        login,

        register,

        logout,

        fetchUser,

    };

};

export default useAuth;