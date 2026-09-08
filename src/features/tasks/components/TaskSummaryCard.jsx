import {
    ClipboardList,
    Clock3,
    LoaderCircle,
    CircleCheckBig,
} from "lucide-react";

import SummaryCard from "./SummaryCard";

const TaskSummaryCards = ({ summary }) => {

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <SummaryCard
                title="Total Tasks"
                value={summary.total}
                icon={ClipboardList}
                iconBg="bg-indigo-100"
                iconColor="text-indigo-600"
            />

            <SummaryCard
                title="Pending"
                value={summary.pending}
                icon={Clock3}
                iconBg="bg-yellow-100"
                iconColor="text-yellow-600"
            />

            <SummaryCard
                title="In Progress"
                value={summary.inProgress}
                icon={LoaderCircle}
                iconBg="bg-blue-100"
                iconColor="text-blue-600"
            />

            <SummaryCard
                title="Completed"
                value={summary.completed}
                icon={CircleCheckBig}
                iconBg="bg-green-100"
                iconColor="text-green-600"
            />

        </div>

    );

};

export default TaskSummaryCards;