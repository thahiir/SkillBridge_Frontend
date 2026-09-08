import {
PieChart,
Pie,
Cell,
Tooltip,
Legend,
ResponsiveContainer,
} from "recharts";

const TaskStatusChart = ({ tasks }) => {


const data = [
    {
        name: "Pending",
        value: tasks?.pending || 0,
    },
    {
        name: "In Progress",
        value: tasks?.inProgress || 0,
    },
    {
        name: "Completed",
        value: tasks?.completed || 0,
    },
];

const hasTasks = data.some(
    (item) => item.value > 0
);

return (

    <div
        className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
        "
    >

        <div className="mb-6">

            <h2 className="text-lg font-bold text-slate-900">

                Task Status

            </h2>

            <p className="mt-1 text-sm text-slate-500">

                Overview of your current task progress.

            </p>

        </div>

        <div className="h-[320px]">

            {hasTasks ? (

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <PieChart>

                        <Pie
                            data={data}
                            cx="50%"
                            cy="45%"
                            innerRadius={75}
                            outerRadius={110}
                            paddingAngle={4}
                            dataKey="value"
                        >

                            <Cell fill="#f59e0b" />

                            <Cell fill="#3b82f6" />

                            <Cell fill="#22c55e" />

                        </Pie>

                        <Tooltip
                            formatter={(value) => [
                                value,
                                "Tasks",
                            ]}
                            contentStyle={{
                                borderRadius: "12px",
                                border: "1px solid #e2e8f0",
                                boxShadow:
                                    "0 4px 12px rgba(0,0,0,0.08)",
                            }}
                        />

                        <Legend
                            verticalAlign="bottom"
                            iconType="circle"
                        />

                    </PieChart>

                </ResponsiveContainer>

            ) : (

                <div
                    className="
                        flex
                        h-full
                        items-center
                        justify-center
                        text-center
                    "
                >

                    <div>

                        <p className="font-medium text-slate-600">

                            No tasks available

                        </p>

                        <p className="mt-1 text-sm text-slate-400">

                            Create a task to see your analytics.

                        </p>

                    </div>

                </div>

            )}

        </div>

    </div>

);


};

export default TaskStatusChart;
