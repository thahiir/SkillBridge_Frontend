import { create } from "zustand";

const useAuthStore = create((set) => ({

    user: null,

    token: localStorage.getItem("token"),

    isAuthenticated: !!localStorage.getItem("token"),

    isLoading: true,

    login: (user, token) => {

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        set({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
        });

    },

    logout: () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        set({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
        });

    },

    setUser: (user) => {

        set({
            user,
            isAuthenticated: !!user,
        });

    },

    setLoading: (loading) => {

        set({
            isLoading: loading,
        });

    },

}));

export default useAuthStore;