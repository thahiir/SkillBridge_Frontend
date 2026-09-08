import { ClipboardList } from "lucide-react";

import SectionHeader from "./SectionHeader";
import TaskItem from "./TaskItem";
import EmptyWidget from "../widget/EmptyWidget";

const RecentTasks = ({ tasks }) => {

    // Empty State
    if (!tasks || tasks.length === 0) {
        return (
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <SectionHeader
                    title="Recent Tasks"
                    to="/tasks"
                />

                <EmptyWidget
                    icon={ClipboardList}
                    title="No Tasks Yet"
                    description="Create your first task and start managing your work efficiently."
                    buttonText="Create Task"
                    buttonLink="/tasks"
                />

            </div>
        );
    }

    // Normal State
    return (
        <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <SectionHeader
                title="Recent Tasks"
                to="/tasks"
            />

            <div className="space-y-5">

                {tasks.map((task) => (

                    <TaskItem
                        key={task._id}
                        task={task}
                    />

                ))}

            </div>

        </div>
    );
};

export default RecentTasks;