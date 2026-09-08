import {
    CalendarDays,
} from "lucide-react";

import useBudget from "../hooks/useBudget";

import BudgetOverview
    from "../components/BudgetOverview";

import BudgetForm
    from "../components/BudgetForm";


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];


const Budget = () => {

    const {
        budget,
        spending,
        month,
        year,
        setMonth,
        loading,
        saving,
        error,
        saveBudget,
    } = useBudget();


    const totalExpense = spending?.totalSpent || 0;

    


    if (loading) {

        return (

            <div className="space-y-6">

                <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-200" />

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                    {Array.from({
                        length: 4,
                    }).map((_, index) => (

                        <div
                            key={index}
                            className="h-32 animate-pulse rounded-2xl bg-slate-200"
                        />

                    ))}

                </div>

                <div className="h-96 animate-pulse rounded-2xl bg-slate-200" />

            </div>
        );
    }


    return (

        <div className="space-y-6">

            {/* Header */}

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                    <h1 className="text-2xl font-bold text-slate-900">
                        Budget
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage your monthly income and spending plan.
                    </p>

                </div>


                {/* Month Selector */}

                <div className="flex items-center gap-2">

                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2">

                        <CalendarDays
                            size={18}
                            className="text-slate-500"
                        />

                        <select
                            value={month}
                            onChange={(event) =>
                                setMonth(
                                    Number(
                                        event.target.value
                                    )
                                )
                            }
                            className="bg-transparent text-sm font-medium outline-none"
                        >

                            {months.map(
                                (name, index) => (

                                    <option
                                        key={name}
                                        value={index + 1}
                                    >
                                        {name} {year}
                                    </option>

                                )
                            )}

                        </select>

                    </div>

                </div>

            </div>


            {/* Error */}

            {error && (

                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {error}
                </div>

            )}


            {/* Overview */}

            <BudgetOverview
                budget={budget}
                totalExpense={totalExpense}
            />


            {/* Form */}

            <BudgetForm
                budget={budget}
                onSave={saveBudget}
                saving={saving}
            />

        </div>
    );
};


export default Budget;