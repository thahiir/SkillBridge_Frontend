import { Wallet } from "lucide-react";

import SectionHeader from "./SectionHeader";
import ExpenseItem from "./ExpenseItem";
import EmptyWidget from "../widget/EmptyWidget";

const RecentExpenses = ({ expenses }) => {

    // Empty State
    if (!expenses || expenses.length === 0) {
        return (
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <SectionHeader
                    title="Recent Expenses"
                    to="/expenses"
                />

                <EmptyWidget
                    icon={Wallet}
                    title="No Expenses Yet"
                    description="Track your spending by adding your first expense."
                    buttonText="Add Expense"
                    buttonLink="/expenses"
                />

            </div>
        );
    }

    // Normal State
    return (
        <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <SectionHeader
                title="Recent Expenses"
                to="/expenses"
            />

            <div className="space-y-5">

                {expenses.map((expense) => (

                    <ExpenseItem
                        key={expense._id}
                        expense={expense}
                    />

                ))}

            </div>

        </div>
    );
};

export default RecentExpenses;