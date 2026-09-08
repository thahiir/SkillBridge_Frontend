import { Bell } from "lucide-react";
import { NavLink } from "react-router-dom";

const NotificationButton = () => {
    return (
        <NavLink
            to="/notifications"
            className="
                relative
                rounded-xl
                border
                border-slate-200
                bg-white
                p-3
                transition
                hover:bg-slate-100
                inline-flex
                items-center
                justify-center
            "
        >
            <Bell size={20} />

            <span
                className="
                    absolute
                    right-2
                    top-2
                    h-2
                    w-2
                    rounded-full
                    bg-red-500
                "
            />
        </NavLink>
    );
};

export default NotificationButton;