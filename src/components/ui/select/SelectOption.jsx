import clsx from "clsx";

const SelectOption = ({

    option,

    selected,

    onClick,

}) => {

    return (

        <button

            type="button"

            onClick={onClick}

            className={clsx(

                "w-full rounded-lg px-4 py-3 text-left transition",

                selected

                    ? "bg-indigo-100 text-indigo-700"

                    : "hover:bg-slate-100"

            )}

        >

            {option.label}

        </button>

    );

};

export default SelectOption;