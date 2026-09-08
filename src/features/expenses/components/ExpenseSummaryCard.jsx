import React from "react";

const ExpenseSummaryCard = ({
    title,
    value,
    color = "bg-indigo-500",
}) => {

    return (

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div
                className={`mb-4 h-2 w-20 rounded-full ${color}`}
            />

            <h3 className="text-sm font-medium text-slate-500">

                {title}

            </h3>

            <p className="mt-3 text-3xl font-bold text-slate-800">

                {value}

            </p>

        </div>

    );

};

export default ExpenseSummaryCard;