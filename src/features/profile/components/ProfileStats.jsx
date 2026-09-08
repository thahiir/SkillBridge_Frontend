import { CheckCircle, ClipboardList, DollarSign, Bell } from "lucide-react";

const ProfileStats = ({
    taskSummary,
    expenseSummary,
    notificationSummary,
}) => {

    const stats = [

        {
            title: "Total Tasks",
            value: taskSummary?.total || 0,
            icon: ClipboardList,
            color: "bg-blue-100 text-blue-600",
        },

        {
            title: "Completed Tasks",
            value: taskSummary?.completed || 0,
            icon: CheckCircle,
            color: "bg-green-100 text-green-600",
        },

        {
            title: "Total Expenses",
            value: `₹${expenseSummary?.totalExpense || 0}`,
            icon: DollarSign,
            color: "bg-yellow-100 text-yellow-600",
        },

        {
            title: "Notifications",
            value:
                notificationSummary?.totalNotifications || 0,
            icon: Bell,
            color: "bg-red-100 text-red-600",
        },

    ];

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => {

                const Icon = item.icon;

                return (

                    <div
                        key={item.title}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-slate-500">

                                    {item.title}

                                </p>

                                <h2 className="mt-2 text-3xl font-bold">

                                    {item.value}

                                </h2>

                            </div>

                            <div
                                className={`rounded-2xl p-4 ${item.color}`}
                            >

                                <Icon size={26} />

                            </div>

                        </div>

                    </div>

                );

            })}

        </div>

    );

};

export default ProfileStats;