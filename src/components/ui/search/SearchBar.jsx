import {

    Search,

    X,

    Loader2,

} from "lucide-react";

import {

    useEffect,

    useState,

} from "react";

import clsx from "clsx";

import useDebounce from "./useDebounce";

const SearchBar = ({

    placeholder = "Search...",

    value = "",

    onChange,

    onSearch,

    debounce = 500,

    loading = false,

    className = "",

}) => {

    const [

        search,

        setSearch,

    ] = useState(value);

    const debouncedSearch = useDebounce(

        search,

        debounce

    );

    useEffect(() => {

        if (onSearch) {

            onSearch(debouncedSearch);

        }

    }, [

        debouncedSearch,

        onSearch,

    ]);

    useEffect(() => {

        setSearch(value);

    }, [value]);

    const clearSearch = () => {

        setSearch("");

        onChange?.("");

        onSearch?.("");

    };

    const handleKeyDown = (e) => {

        if (e.key === "Escape") {

            clearSearch();

        }

    };

    return (

        <div

            className={clsx(

                "relative w-full",

                className

            )}

        >

            <Search

                size={18}

                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"

            />

            <input

                value={search}

                onChange={(e) => {

                    setSearch(

                        e.target.value

                    );

                    onChange?.(

                        e.target.value

                    );

                }}

                onKeyDown={handleKeyDown}

                placeholder={placeholder}

                className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-12 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"

            />

            {loading ? (

                <Loader2

                    size={18}

                    className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-indigo-500"

                />

            ) : (

                search && (

                    <button

                        type="button"

                        onClick={clearSearch}

                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-red-500"

                    >

                        <X size={18} />

                    </button>

                )

            )}

        </div>

    );

};

export default SearchBar;