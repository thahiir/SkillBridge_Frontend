import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const COLORS = [
    "#3B82F6", // Blue
    "#22C55E", // Green
    "#F59E0B", // Amber
    "#EF4444", // Red
    "#8B5CF6", // Purple
    "#06B6D4", // Cyan
    "#EC4899", // Pink
    "#64748B", // Slate
];

const ExpenseCategoryChart = ({ categories = [] }) => {

    const data = categories.map((item) => ({
        name: item._id || "Others",
        value: item.total || 0,
    }));

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6">

                <h2 className="text-xl font-bold text-slate-900">
                    Expenses by Category
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    See where your money is being spent.
                </p>

            </div>

            {data.length === 0 ? (

                <div className="flex h-80 items-center justify-center">

                    <p className="text-slate-500">
                        No expense data available.
                    </p>

                </div>

            ) : (

                <div className="h-80">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <PieChart>

                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                innerRadius={55}
                                paddingAngle={3}
                            >

                                {data.map((entry, index) => (

                                    <Cell
                                        key={`cell-${index}`}
                                        fill={
                                            COLORS[
                                                index % COLORS.length
                                            ]
                                        }
                                    />

                                ))}

                            </Pie>

                            <Tooltip
                                formatter={(value) =>
                                    `₹${Number(value).toLocaleString("en-IN")}`
                                }
                            />

                            <Legend />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

            )}

        </div>
    );
};

export default ExpenseCategoryChart;