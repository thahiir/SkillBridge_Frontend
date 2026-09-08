import {
    IndianRupee,
    Calendar,
    CreditCard,
} from "lucide-react";

const categoryColors = {
    Food: "bg-orange-100 text-orange-700",
    Travel: "bg-blue-100 text-blue-700",
    Shopping: "bg-pink-100 text-pink-700",
    Education: "bg-violet-100 text-violet-700",
    Bills: "bg-red-100 text-red-700",
    Entertainment: "bg-green-100 text-green-700",
    Healthcare: "bg-cyan-100 text-cyan-700",
    Others: "bg-slate-100 text-slate-700",
};

const ExpenseItem = ({ expense }) => {

    return (

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">

            <div className="flex items-start justify-between">

                <div>

                    <h3 className="font-semibold text-slate-800">
                        {expense.title}
                    </h3>

                    <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                        <IndianRupee size={15} />
                        {expense.amount}
                    </p>

                </div>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        categoryColors[expense.category] ||
                        categoryColors.Others
                    }`}
                >
                    {expense.category}
                </span>

            </div>

            <div className="mt-5 flex items-center justify-between text-sm text-slate-500">

                <div className="flex items-center gap-2">
                    <CreditCard size={15} />
                    {expense.paymentMethod}
                </div>

                <div className="flex items-center gap-2">
                    <Calendar size={15} />
                    {new Date(expense.date).toLocaleDateString()}
                </div>

            </div>

        </div>

    );

};

export default ExpenseItem;