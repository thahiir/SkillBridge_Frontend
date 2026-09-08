import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="relative hidden w-full max-w-md lg:block">
            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
                type="text"
                placeholder="Search tasks, expenses, notes..."
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    py-2.5
                    pl-10
                    pr-4
                    outline-none
                    transition
                    focus:border-indigo-500
                    focus:bg-white
                "
            />
        </div>
    );
};

export default SearchBar;