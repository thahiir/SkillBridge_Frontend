import ExpenseSummaryCard from "./ExpenseSummaryCard";

const ExpenseSummary = ({ summary }) => {

    if (!summary) return null;

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <ExpenseSummaryCard
                title="Total Expense"
                value={`₹${summary.totalExpense}`}
                color="bg-red-500"
            />

            <ExpenseSummaryCard
                title="Transactions"
                value={summary.totalTransactions}
                color="bg-blue-500"
            />

            <ExpenseSummaryCard
                title="Average Expense"
                value={`₹${summary.averageExpense}`}
                color="bg-green-500"
            />

            <ExpenseSummaryCard
                title="Highest Expense"
                value={`₹${summary.highestExpense}`}
                color="bg-yellow-500"
            />

        </div>

    );

};

export default ExpenseSummary;