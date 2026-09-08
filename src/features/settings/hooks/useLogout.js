import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthStore from "../../../store/authStore";

const useLogout = () => {

    const navigate = useNavigate();

    const logoutUser = useAuthStore((state) => state.logout);

    const logout = () => {

        logoutUser();

        toast.success("Logged out successfully.");

        navigate("/login", {
            replace: true,
        });

    };

    return { logout };

};

export default useLogout;