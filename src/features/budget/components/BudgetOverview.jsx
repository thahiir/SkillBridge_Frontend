import {
    Wallet,
    PiggyBank,
    TrendingDown,
    CircleDollarSign,
} from "lucide-react";


const formatCurrency = (value = 0) => {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }
    ).format(value);
};


const BudgetOverview = ({
    budget,
    totalExpense = 0,
}) => {

    const income =
        Number(budget?.income || 0);

    const monthlyBudget =
        Number(budget?.budget || 0);

    const remainingBudget =
        monthlyBudget - totalExpense;

    const remainingIncome =
        income - totalExpense;

    const budgetUsage =
        monthlyBudget > 0
            ? (totalExpense / monthlyBudget) * 100
            : 0;


    return (

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {/* Income */}

            <div className="rounded-2xl bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-slate-500">
                            Monthly Income
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-slate-900">
                            {formatCurrency(income)}
                        </h3>

                    </div>

                    <div className="rounded-xl bg-indigo-50 p-3">
                        <Wallet
                            size={22}
                            className="text-indigo-600"
                        />
                    </div>

                </div>

            </div>


            {/* Budget */}

            <div className="rounded-2xl bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-slate-500">
                            Monthly Budget
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-slate-900">
                            {formatCurrency(monthlyBudget)}
                        </h3>

                    </div>

                    <div className="rounded-xl bg-blue-50 p-3">
                        <PiggyBank
                            size={22}
                            className="text-blue-600"
                        />
                    </div>

                </div>

            </div>


            {/* Spent */}

            <div className="rounded-2xl bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-slate-500">
                            Total Spent
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-slate-900">
                            {formatCurrency(totalExpense)}
                        </h3>

                    </div>

                    <div className="rounded-xl bg-red-50 p-3">
                        <TrendingDown
                            size={22}
                            className="text-red-600"
                        />
                    </div>

                </div>

            </div>


            {/* Remaining */}

            <div className="rounded-2xl bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm text-slate-500">
                            Remaining Budget
                        </p>

                        <h3
                            className={`mt-2 text-2xl font-bold ${
                                remainingBudget < 0
                                    ? "text-red-600"
                                    : "text-emerald-600"
                            }`}
                        >
                            {formatCurrency(
                                remainingBudget
                            )}
                        </h3>

                    </div>

                    <div className="rounded-xl bg-emerald-50 p-3">
                        <CircleDollarSign
                            size={22}
                            className="text-emerald-600"
                        />
                    </div>

                </div>

            </div>

        </div>
    );
};


export default BudgetOverview;