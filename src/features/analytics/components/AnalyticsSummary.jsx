import {
ClipboardList,
CheckCircle,
Wallet,
Receipt,
} from "lucide-react";

const AnalyticsSummary = ({
tasks,
expenses,
notifications,
}) => {


const totalTasks = tasks?.total || 0;

const completedTasks = tasks?.completed || 0;

const completionRate =
    totalTasks > 0
        ? Math.round(
            (completedTasks / totalTasks) * 100
        )
        : 0;

const totalExpense =
    expenses?.totalExpense || 0;

const totalTransactions =
    expenses?.totalTransactions || 0;

const stats = [

    {
        title: "Total Tasks",

        value: totalTasks,

        icon: ClipboardList,

        iconStyle:
            "bg-blue-100 text-blue-600",
    },

    {
        title: "Task Completion",

        value: `${completionRate}%`,

        icon: CheckCircle,

        iconStyle:
            "bg-green-100 text-green-600",
    },

    {
        title: "Total Expenses",

        value: `₹${totalExpense.toLocaleString("en-IN")}`,

        icon: Wallet,

        iconStyle:
            "bg-yellow-100 text-yellow-600",
    },

    {
        title: "Transactions",

        value: totalTransactions,

        icon: Receipt,

        iconStyle:
            "bg-purple-100 text-purple-600",
    },

];

return (

    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {

            const Icon = stat.icon;

            return (

                <div
                    key={stat.title}
                    className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-6
                        shadow-sm
                        transition
                        hover:-translate-y-1
                        hover:shadow-md
                    "
                >

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-sm font-medium text-slate-500">

                                {stat.title}

                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-slate-900">

                                {stat.value}

                            </h2>

                        </div>

                        <div
                            className={`
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                ${stat.iconStyle}
                            `}
                        >

                            <Icon size={24} />

                        </div>

                    </div>

                </div>

            );

        })}

    </div>

);


};

export default AnalyticsSummary;
