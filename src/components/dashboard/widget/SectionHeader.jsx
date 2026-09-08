import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SectionHeader = ({ title, to }) => {
    return (
        <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">
                {title}
            </h2>

            <Link
                to={to}
                className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
                View All
                <ChevronRight size={16} />
            </Link>
        </div>
    );
};

export default SectionHeader;