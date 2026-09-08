import useAuthStore from "../../store/authStore";
import { NavLink } from "react-router-dom";
const UserDropdown = () => {
    const user = useAuthStore((state) => state.user);

    return (
    <NavLink
        to="/profile"
        className="
            flex
            items-center
            gap-3
            rounded-xl
            px-2
            py-2
            transition
            hover:bg-slate-100
        "
    >
        <img
            src={user?.profileImage || "/default-avatar.png"}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
        />

        <div>
            <h4 className="font-semibold text-slate-800">
                {user?.Fullname}
            </h4>

            <p className="text-sm text-slate-500">
                {user?.Email}
            </p>
        </div>
    </NavLink>
    );
};

export default UserDropdown;