import ExpenseSummary from "./ExpenseSummary";
import ExpenseCategoryChart from "./ExpenseCategoryChart";
import ExpenseMonthlyChart from "./ExpenseMonthlyChart";

const ExpenseAnalyticsSection = ({
    summary,
    categories,
    monthly,
}) => {

    return (

        <div className="space-y-8">

            <ExpenseSummary
                summary={summary}
            />

            <div className="grid gap-6 lg:grid-cols-2">

                <ExpenseCategoryChart
                    categories={categories}
                />

                <ExpenseMonthlyChart
                    monthly={monthly}
                />

            </div>

        </div>

    );

};

export default ExpenseAnalyticsSection;