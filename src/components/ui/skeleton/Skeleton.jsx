import clsx from "clsx";

const Skeleton = ({

    className = "",

    rounded = "rounded-xl",

}) => {

    return (

        <div

            className={clsx(

                "animate-pulse bg-slate-200",

                rounded,

                className

            )}

        />

    );

};

export default Skeleton;