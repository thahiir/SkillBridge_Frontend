import {

    Inbox

} from "lucide-react";

const EmptyTable = ({

    title="No Data Found",

    subtitle="Nothing to display."

})=>{

    return(

        <div className="flex flex-col items-center justify-center py-16">

            <Inbox

                size={50}

                className="text-slate-300"

            />

            <h3 className="mt-4 text-xl font-semibold">

                {title}

            </h3>

            <p className="mt-2 text-slate-500">

                {subtitle}

            </p>

        </div>

    );

};

export default EmptyTable;