import { Moon } from "lucide-react";

const ThemeToggle = () => {
    return (
        <button
            className="
                rounded-xl
                border
                border-slate-200
                bg-white
                p-3
                transition
                hover:bg-slate-100
            "
        >
            <Moon size={20} />
        </button>
    );
};

export default ThemeToggle;