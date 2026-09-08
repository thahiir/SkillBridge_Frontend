import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import useAuthStore from "../../../store/authStore";

const LogoutButton = () => {

    const navigate = useNavigate();

    const logoutStore = useAuthStore(
        (state) => state.logout
    );

    const handleLogout = () => {

        console.log("========== LOGOUT START ==========");

        console.log(
            "Before:",
            useAuthStore.getState()
        );

        logoutStore();

        console.log(
            "After:",
            useAuthStore.getState()
        );

        console.log(
            "Token:",
            localStorage.getItem("token")
        );

        toast.success("Logged out successfully.");

        navigate("/login", {
            replace: true,
        });

        console.log("Navigation called");

    };

    return (

        <button
            type="button"
            onClick={handleLogout}
            className="
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-red-400
                transition
                hover:bg-red-500/10
                hover:text-red-300
            "
        >

            <LogOut size={18} />

            <span>
                Logout
            </span>

        </button>

    );

};

export default LogoutButton;