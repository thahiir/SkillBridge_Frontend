import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const ExpenseMonthlyChart = ({ monthly }) => {

    if (!monthly || monthly.length === 0) {

        return (

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <h2 className="mb-4 text-xl font-semibold">
                    Monthly Expenses
                </h2>

                <p className="text-slate-500">
                    No monthly expense data available.
                </p>

            </div>

        );

    }

    const chartData = monthly.map((item) => ({
        month: MONTHS[item._id.month - 1],
        amount: item.total,
    }));

    return (

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-semibold text-slate-800">

                Monthly Expenses

            </h2>

            <div className="h-96">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={chartData}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="amount"
                            radius={[8, 8, 0, 0]}
                            fill="#6366F1"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

};

export default ExpenseMonthlyChart;