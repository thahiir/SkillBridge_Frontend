import {
    Calendar,
    Flag,
    CheckCircle2,
    Clock,
} from "lucide-react";

const priorityColors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
};

const statusColors = {
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
};

const TaskItem = ({ task }) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">

            <div className="flex items-start justify-between">

                <div>

                    <h3 className="font-semibold text-slate-800">
                        {task.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                        {task.description}
                    </p>

                </div>

                <Flag
                    size={18}
                    className="text-indigo-500"
                />

            </div>

            <div className="mt-5 flex flex-wrap gap-2">

                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityColors[task.priority]}`}
                >
                    {task.priority}
                </span>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[task.status]}`}
                >
                    {task.status}
                </span>

            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">

                <Calendar size={16} />

                {new Date(task.dueDate).toLocaleDateString()}

            </div>

        </div>
    );
};

export default TaskItem;