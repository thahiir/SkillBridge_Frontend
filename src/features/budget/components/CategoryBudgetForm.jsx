const categories = [
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Entertainment",
    "Education",
    "Healthcare",
    "Travel",
    "Others",
];


const CategoryBudgetForm = ({
    values,
    onChange,
}) => {

    return (

        <div>

            <h2 className="mb-4 text-lg font-semibold text-slate-900">
                Category Budgets
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {categories.map(
                    (category) => (

                        <div
                            key={category}
                        >

                            <label className="mb-1 block text-sm font-medium text-slate-600">
                                {category}
                            </label>

                            <div className="relative">

                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                                    ₹
                                </span>

                                <input
                                    type="number"
                                    min="0"
                                    value={
                                        values?.[category] ??
                                        ""
                                    }
                                    onChange={(event) =>
                                        onChange(
                                            category,
                                            event.target.value
                                        )
                                    }
                                    placeholder="0"
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        py-3
                                        pl-8
                                        pr-3
                                        outline-none
                                        transition
                                        focus:border-indigo-500
                                        focus:ring-2
                                        focus:ring-indigo-100
                                    "
                                />

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>
    );
};


export default CategoryBudgetForm;