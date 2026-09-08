import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Logo = () => {
    return (
        <Link
            to="/dashboard"
            className="flex items-center gap-3"
        >
            <div className="rounded-xl bg-indigo-600 p-2 text-white">
                <GraduationCap size={24} />
            </div>

            <div>
                <h1 className="text-xl font-bold text-slate-900">
                    SkillBridge
                </h1>

                <p className="text-xs text-slate-500">
                    Productivity Suite
                </p>
            </div>
        </Link>
    );
};

export default Logo;