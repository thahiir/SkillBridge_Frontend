import {
    useEffect,
    useState,
} from "react";

import CategoryBudgetForm
    from "./CategoryBudgetForm";


const BudgetForm = ({
    budget,
    onSave,
    saving,
}) => {

    const [income, setIncome] =
        useState("");

    const [monthlyBudget, setMonthlyBudget] =
        useState("");

    const [categoryBudgets, setCategoryBudgets] =
        useState({});


    useEffect(() => {

        setIncome(
            budget?.income ?? ""
        );

        setMonthlyBudget(
            budget?.budget ?? ""
        );

        setCategoryBudgets(
            budget?.categoryBudgets || {}
        );

    }, [budget]);


    const handleCategoryChange = (
        category,
        value
    ) => {

        setCategoryBudgets(
            (previous) => ({
                ...previous,
                [category]: value,
            })
        );
    };


    const handleSubmit = async (
        event
    ) => {

        event.preventDefault();

        await onSave({

            income:
                Number(income) || 0,

            budget:
                Number(monthlyBudget) || 0,

            categoryBudgets:
                Object.fromEntries(

                    Object.entries(
                        categoryBudgets
                    ).map(
                        ([key, value]) => [
                            key,
                            Number(value) || 0,
                        ]
                    )
                ),
        });
    };


    return (

        <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-sm"
        >

            <div className="mb-6">

                <h2 className="text-lg font-semibold text-slate-900">
                    Monthly Financial Plan
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Set your income and spending limits for this month.
                </p>

            </div>


            <div className="grid gap-5 md:grid-cols-2">

                {/* Income */}

                <div>

                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Monthly Income
                    </label>

                    <div className="relative">

                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            ₹
                        </span>

                        <input
                            type="number"
                            min="0"
                            value={income}
                            onChange={(event) =>
                                setIncome(
                                    event.target.value
                                )
                            }
                            placeholder="30000"
                            className="
                                w-full
                                rounded-xl
                                border
                                border-slate-200
                                py-3
                                pl-8
                                pr-4
                                outline-none
                                focus:border-indigo-500
                                focus:ring-2
                                focus:ring-indigo-100
                            "
                        />

                    </div>

                </div>


                {/* Budget */}

                <div>

                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Monthly Spending Budget
                    </label>

                    <div className="relative">

                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                            ₹
                        </span>

                        <input
                            type="number"
                            min="0"
                            value={monthlyBudget}
                            onChange={(event) =>
                                setMonthlyBudget(
                                    event.target.value
                                )
                            }
                            placeholder="20000"
                            className="
                                w-full
                                rounded-xl
                                border
                                border-slate-200
                                py-3
                                pl-8
                                pr-4
                                outline-none
                                focus:border-indigo-500
                                focus:ring-2
                                focus:ring-indigo-100
                            "
                        />

                    </div>

                </div>

            </div>


            <div className="my-8 border-t border-slate-100" />


            <CategoryBudgetForm
                values={categoryBudgets}
                onChange={
                    handleCategoryChange
                }
            />


            <div className="mt-8 flex justify-end">

                <button
                    type="submit"
                    disabled={saving}
                    className="
                        rounded-xl
                        bg-indigo-600
                        px-6
                        py-3
                        font-medium
                        text-white
                        transition
                        hover:bg-indigo-700
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "
                >
                    {saving
                        ? "Saving..."
                        : "Save Budget"}
                </button>

            </div>

        </form>
    );
};


export default BudgetForm;