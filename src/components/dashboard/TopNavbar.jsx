import { Menu, Bot } from "lucide-react";

import SearchBar from "./SearchBar";
import NotificationButton from "./NotificationButton";
import ThemeToggle from "./ThemeToggle";
import UserDropdown from "./UserDropdown";
import { useNavigate } from "react-router-dom";

const TopNavbar = ({ onMenuClick }) => {
    const navigate = useNavigate();
    const handleAIAssistant = () => {
        navigate("/ai");
    };
    return (
        <header
            className="
                sticky
                top-0
                z-40
                flex
                h-20
                items-center
                justify-between
                border-b
                bg-white
                px-6
            "
        >
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden"
                >
                    <Menu size={24} />
                </button>

                <SearchBar />
            </div>

            <div className="flex items-center gap-3">

                <button
                    className="
                        rounded-xl
                        bg-indigo-600
                        p-3
                        text-white
                        transition
                        hover:bg-indigo-700
                    "
                    onClick={handleAIAssistant}
                >
                    <Bot size={20} />
                </button>

                <NotificationButton />

                <ThemeToggle />

                <UserDropdown />

            </div>
        </header>
    );
};

export default TopNavbar;