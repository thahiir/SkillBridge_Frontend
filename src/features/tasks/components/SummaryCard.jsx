import { ArrowUpRight } from "lucide-react";

const SummaryCard = ({
    title,
    value,
    icon: Icon,
    iconBg,
    iconColor,
}) => {

    return (

        <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm font-medium text-slate-500">

                        {title}

                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-slate-800">

                        {value}

                    </h2>

                </div>

                <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
                >

                    <Icon
                        size={28}
                        className={iconColor}
                    />

                </div>

            </div>

            <div className="mt-5 flex items-center text-xs text-slate-400">

                <ArrowUpRight
                    size={14}
                    className="mr-1"
                />

                Live Summary

            </div>

        </div>

    );

};

export default SummaryCard;