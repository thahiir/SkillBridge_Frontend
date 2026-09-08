import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const COLORS = [
    "#6366F1",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#06B6D4",
    "#8B5CF6",
    "#EC4899",
    "#84CC16",
];

const ExpenseCategoryChart = ({ categories }) => {

    if (!categories || categories.length === 0) {

        return (

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

                <h2 className="mb-4 text-xl font-semibold">

                    Expense By Category

                </h2>

                <p className="text-slate-500">

                    No expense data available.

                </p>

            </div>

        );

    }

    const chartData = categories.map((item) => ({

        name: item._id,
        value: item.total,

    }));

    return (

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-semibold text-slate-800">

                Expense By Category

            </h2>

            <div className="h-96">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={120}
                            label
                        >

                            {chartData.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />

                            ))}

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

};

export default ExpenseCategoryChart;