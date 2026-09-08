import PageHeader from "../../../components/dashboard/PageHeader";

import useAnalytics from "../hooks/useAnalytics";

import AnalyticsSummary from "../components/AnalyticsSummary";
import TaskStatusChart from "../components/TaskStatusChart";
import ExpenseCategoryChart from "../components/ExpenseCategoryChart";
import MonthlyExpenseChart from "../components/MonthlyExpenseChart";
import AnalyticsSkeleton from "../components/AnalyticsSkeleton";

const Analytics = () => {

    const {
        dashboard,
        tasks,
        expenses,
        monthlyExpenses,
        categoryExpenses,
        loading,
        error,
    } = useAnalytics();

    if (loading) {
        return <AnalyticsSkeleton />;
    }

    if (error) {
        return (
            <div className="space-y-8">

                <PageHeader
                    title="Analytics"
                    subtitle="Track your productivity and spending."
                />

                <div className="rounded-2xl border border-red-200 bg-red-50 p-6">

                    <p className="font-medium text-red-600">
                        {error}
                    </p>

                </div>

            </div>
        );
    }

    return (
        <div className="space-y-8">

            <PageHeader
                title="Analytics"
                subtitle="Track your productivity and spending."
            />

            {/* Summary */}

            <AnalyticsSummary
                tasks={tasks}
                expenses={expenses}
                notifications={dashboard?.notifications}
            />

            {/* Charts */}

            <div className="grid gap-8 lg:grid-cols-2">

                <TaskStatusChart
                    tasks={tasks}
                />

                <ExpenseCategoryChart
                    categories={categoryExpenses}
                />

            </div>

            {/* Monthly Expenses */}

            <MonthlyExpenseChart
                data={monthlyExpenses}
            />

        </div>
    );
};

export default Analytics;