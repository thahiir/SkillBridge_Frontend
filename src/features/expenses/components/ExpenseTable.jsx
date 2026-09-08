import ExpenseRow from "./ExpenseRow";

const ExpenseTable = ({
    expenses,
    onEdit,
    onDelete,
}) => {

    return (

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">

            <table className="min-w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="px-4 py-3 text-left">
                            Title
                        </th>

                        <th className="px-4 py-3 text-left">
                            Amount
                        </th>

                        <th className="px-4 py-3 text-left">
                            Category
                        </th>

                        <th className="px-4 py-3 text-left">
                            Payment
                        </th>

                        <th className="px-4 py-3 text-left">
                            Date
                        </th>

                        <th className="px-4 py-3 text-left">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {expenses.map((expense) => (

                        <ExpenseRow
                            key={expense._id}
                            expense={expense}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />

                    ))}

                </tbody>

            </table>

        </div>

    );

};

export default ExpenseTable;