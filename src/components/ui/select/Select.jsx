import {

    useMemo,

    useRef,

    useState,

} from "react";

import {

    ChevronDown,

    Search,

    X,

} from "lucide-react";

import {

    AnimatePresence,

    motion,

} from "framer-motion";

import clsx from "clsx";

import useClickOutside from "./useClickOutside";
import SelectOption from "./SelectOption";

const Select = ({

    label,

    placeholder = "Select",

    options = [],

    value,

    onChange,

    searchable = true,

    clearable = true,

}) => {

    const [

        open,

        setOpen,

    ] = useState(false);

    const [

        search,

        setSearch,

    ] = useState("");

    const ref = useRef(null);

    useClickOutside(

        ref,

        () => setOpen(false)

    );

    const filteredOptions = useMemo(() => {

        return options.filter((item) =>

            item.label

                .toLowerCase()

                .includes(

                    search.toLowerCase()

                )

        );

    }, [

        options,

        search,

    ]);

    const selected = options.find(

        (o) => o.value === value

    );

    return (

        <div

            className="relative"

            ref={ref}

        >

            {label && (

                <label className="mb-2 block font-medium text-slate-700">

                    {label}

                </label>

            )}

            <button

                type="button"

                onClick={() =>

                    setOpen(

                        !open

                    )

                }

                className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 py-3 transition hover:border-indigo-500"

            >

                <span>

                    {selected?.label ||

                        placeholder}

                </span>

                <div className="flex items-center gap-2">

                    {clearable && value && (

                        <X

                            size={16}

                            onClick={(e) => {

                                e.stopPropagation();

                                onChange("");

                            }}

                        />

                    )}

                    <ChevronDown

                        size={18}

                    />

                </div>

            </button>

            <AnimatePresence>

                {open && (

                    <motion.div

                        initial={{

                            opacity: 0,

                            y: 8,

                        }}

                        animate={{

                            opacity: 1,

                            y: 0,

                        }}

                        exit={{

                            opacity: 0,

                            y: 8,

                        }}

                        className="absolute z-50 mt-2 w-full rounded-xl border bg-white p-3 shadow-xl"

                    >

                        {searchable && (

                            <div className="relative mb-3">

                                <Search

                                    size={16}

                                    className="absolute left-3 top-3"

                                />

                                <input

                                    value={search}

                                    onChange={(e) =>

                                        setSearch(

                                            e.target.value

                                        )

                                    }

                                    placeholder="Search..."

                                    className="w-full rounded-lg border py-2 pl-9 pr-3"

                                />

                            </div>

                        )}

                        <div className="max-h-60 overflow-auto space-y-1">

                            {filteredOptions.map(

                                (

                                    option

                                ) => (

                                    <SelectOption

                                        key={

                                            option.value

                                        }

                                        option={

                                            option

                                        }

                                        selected={

                                            option.value === value

                                        }

                                        onClick={() => {

                                            onChange(

                                                option.value

                                            );

                                            setOpen(

                                                false

                                            );

                                        }}

                                    />

                                )

                            )}

                            {filteredOptions.length === 0 && (

                                <p className="px-4 py-3 text-center text-sm text-slate-500">

                                    No results found.

                                </p>

                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Select;