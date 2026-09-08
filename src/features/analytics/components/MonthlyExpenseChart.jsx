import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const monthNames = [
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

const MonthlyExpenseChart = ({ data = [] }) => {

    const chartData = data.map((item) => ({
        month: monthNames[item._id?.month - 1] || "Unknown",
        total: item.total || 0,
    }));

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6">

                <h2 className="text-xl font-bold text-slate-900">
                    Monthly Expenses
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Track your spending across the year.
                </p>

            </div>

            {chartData.length === 0 ? (

                <div className="flex h-80 items-center justify-center">

                    <p className="text-slate-500">
                        No monthly expense data available.
                    </p>

                </div>

            ) : (

                <div className="h-80">

                    <ResponsiveContainer width="100%" height="100%">

                        <BarChart data={chartData}>

                            <CartesianGrid
                                strokeDasharray="3 3"
                            />

                            <XAxis
                                dataKey="month"
                            />

                            <YAxis
                                tickFormatter={(value) =>
                                    `₹${value}`
                                }
                            />

                            <Tooltip
                                formatter={(value) =>
                                    `₹${Number(value).toLocaleString("en-IN")}`
                                }
                            />

                            <Bar
                                dataKey="total"
                                name="Expenses"
                                radius={[8, 8, 0, 0]}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            )}

        </div>
    );
};

export default MonthlyExpenseChart;