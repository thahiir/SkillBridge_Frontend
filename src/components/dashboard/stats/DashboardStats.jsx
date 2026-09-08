import {
    ClipboardList,
    IndianRupee,
    CheckCircle2,
    Bell,
} from "lucide-react";

import StatCard from "./StatCard";
import SkeletonCard from "../../ui/skeleton/SkeletonCard";

const DashboardStats = ({ dashboard }) => {

    

    const stats = [
        {
            id: 1,
            title: "Total Tasks",
            value: dashboard.tasks.total,
            icon: ClipboardList,
            color: "from-blue-500 to-cyan-500",
        },
        {
            id: 2,
            title: "Total Expenses",
            value: `₹${dashboard.expenses.totalExpense}`,
            icon: IndianRupee,
            color: "from-green-500 to-emerald-500",
        },
        {
            id: 3,
            title: "Completed Tasks",
            value: dashboard.tasks.completed,
            icon: CheckCircle2,
            color: "from-violet-500 to-indigo-500",
        },
        {
            id: 4,
            title: "Notifications",
            value: dashboard.notifications.total,
            icon: Bell,
            color: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
                <StatCard
                    key={stat.id}
                    stat={stat}
                />
            ))}
        </section>
    );
};

export default DashboardStats;