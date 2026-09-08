const AIMessage = ({ message }) => {

    const response = message.response;

    if (!response) {
        return null;
    }

    const {
        title,
        message: text,
        data,
        recommendations = [],
        actions = [],
    } = response;

    return (
        <div className="flex items-start gap-3">

            {/* AI Avatar */}

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm text-white">
                ✨
            </div>

            {/* Message */}

            <div className="max-w-3xl">

                <div className="rounded-2xl rounded-tl-sm border border-slate-200 bg-white px-5 py-4 shadow-sm">

                    {title && (
                        <h3 className="mb-1 font-semibold text-slate-900">
                            {title}
                        </h3>
                    )}

                    {text && (
                        <p className="whitespace-pre-wrap text-sm leading-6 text-slate-600">
                            {text}
                        </p>
                    )}

                    {/* Structured Data */}

                    {response.type === "task_summary" &&
                        data && (
                            <TaskSummary data={data} />
                        )}

                    {response.type === "expense_summary" &&
                        data && (
                            <ExpenseSummary data={data} />
                        )}

                    {/* Recommendations */}

                    {recommendations.length > 0 && (
                        <div className="mt-4">

                            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                Recommendations
                            </p>

                            <div className="space-y-2">

                                {recommendations.map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600"
                                        >
                                            {item}
                                        </div>
                                    )
                                )}

                            </div>

                        </div>
                    )}

                    {/* Actions */}

                    {actions.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">

                            {actions.map(
                                (action, index) => (
                                    <button
                                        key={index}
                                        className="rounded-lg bg-indigo-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-indigo-700"
                                    >
                                        {action.label ||
                                            action.action}
                                    </button>
                                )
                            )}

                        </div>
                    )}

                </div>

            </div>

        </div>
    );
};


/*
|--------------------------------------------------------------------------
| Task Summary
|--------------------------------------------------------------------------
*/

const TaskSummary = ({ data }) => {

    return (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">

            <SummaryItem
                label="Total"
                value={data.total ?? 0}
            />

            <SummaryItem
                label="Completed"
                value={data.completed ?? 0}
            />

            <SummaryItem
                label="Pending"
                value={data.pending ?? 0}
            />

            <SummaryItem
                label="High Priority"
                value={data.highPriority ?? 0}
            />

        </div>
    );
};


/*
|--------------------------------------------------------------------------
| Expense Summary
|--------------------------------------------------------------------------
*/

const ExpenseSummary = ({ data }) => {

    return (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">

            <SummaryItem
                label="Total"
                value={`₹${data.totalExpense ?? 0}`}
            />

            <SummaryItem
                label="Transactions"
                value={
                    data.totalTransactions ?? 0
                }
            />

            <SummaryItem
                label="Average"
                value={`₹${data.averageExpense ?? 0}`}
            />

        </div>
    );
};


/*
|--------------------------------------------------------------------------
| Summary Item
|--------------------------------------------------------------------------
*/

const SummaryItem = ({
    label,
    value,
}) => {

    return (
        <div className="rounded-lg bg-slate-50 p-3">

            <p className="text-xs text-slate-400">
                {label}
            </p>

            <p className="mt-1 font-semibold text-slate-800">
                {value}
            </p>

        </div>
    );
};

export default AIMessage;