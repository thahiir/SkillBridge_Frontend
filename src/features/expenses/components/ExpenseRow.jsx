import { Pencil, Trash2 } from "lucide-react";
import CategoryBadge from "./CategoryBadge";
import PaymentBadge from "./PaymentBadge";

const ExpenseRow = ({
    expense,
    onEdit,
    onDelete,
}) => {

    return (

        <tr className="border-b last:border-none">

            <td className="px-4 py-4 font-medium">
                {expense.title}
            </td>

            <td className="px-4 py-4">
                ₹{expense.amount.toLocaleString()}
            </td>

            <td className="px-4 py-4">
                <CategoryBadge
                    category={expense.category}
                />
            </td>

            <td className="px-4 py-4">
                <PaymentBadge
                    paymentMethod={expense.paymentMethod}
                />
            </td>

            <td className="px-4 py-4">
                {new Date(expense.date).toLocaleDateString()}
            </td>

            <td className="px-4 py-4">

                <div className="flex gap-3">

                    <button
                        onClick={() => onEdit(expense)}
                    >
                        <Pencil
                            size={18}
                            className="text-blue-600"
                        />
                    </button>

                    <button
                        onClick={() => onDelete(expense._id)}
                    >
                        <Trash2
                            size={18}
                            className="text-red-600"
                        />
                    </button>

                </div>

            </td>

        </tr>

    );

};

export default ExpenseRow;