import clsx from "clsx";

const Table = ({

    children,

    className=""

})=>{

    return(

        <div

            className={clsx(

                "overflow-hidden",

                "rounded-2xl",

                "border",

                "border-slate-200",

                "bg-white",

                "shadow-sm",

                className

            )}

        >

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    {children}

                </table>

            </div>

        </div>

    );

};

export default Table;