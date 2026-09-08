import { useState } from "react";

import { Bell } from "lucide-react";

import toast from "react-hot-toast";

import SettingsCard from "./SettingsCard";

const NotificationSettings = () => {

    const [settings, setSettings] = useState({

        emailNotifications: true,

        taskReminders: true,

        expenseAlerts: true,

        weeklyReports: false,

    });

    const handleToggle = (key) => {

        setSettings((prev) => ({

            ...prev,

            [key]: !prev[key],

        }));

    };

    const handleSave = () => {

        // API will be connected in a later phase

        toast.success(
            "Notification preferences saved."
        );

    };

    const options = [

        {
            key: "emailNotifications",
            title: "Email Notifications",
            description:
                "Receive important updates via email.",
        },

        {
            key: "taskReminders",
            title: "Task Reminders",
            description:
                "Get reminders for upcoming tasks.",
        },

        {
            key: "expenseAlerts",
            title: "Expense Alerts",
            description:
                "Receive alerts for new expenses.",
        },

        {
            key: "weeklyReports",
            title: "Weekly Reports",
            description:
                "Receive a weekly productivity summary.",
        },

    ];

    return (

        <SettingsCard

            title="Notifications"

            description="Manage your notification preferences."

            icon={Bell}

        >

            <div className="space-y-6">

                {

                    options.map((item) => (

                        <div

                            key={item.key}

                            className="flex items-center justify-between"

                        >

                            <div>

                                <h4 className="font-semibold">

                                    {item.title}

                                </h4>

                                <p className="text-sm text-slate-500">

                                    {item.description}

                                </p>

                            </div>

                            <button

                                onClick={() =>
                                    handleToggle(item.key)
                                }

                                className={`

                                    relative

                                    h-7

                                    w-14

                                    rounded-full

                                    transition

                                    ${settings[item.key]
                                        ? "bg-indigo-600"
                                        : "bg-slate-300"}

                                `}

                            >

                                <span

                                    className={`

                                        absolute

                                        top-1

                                        h-5

                                        w-5

                                        rounded-full

                                        bg-white

                                        transition-all

                                        ${settings[item.key]
                                            ? "left-8"
                                            : "left-1"}

                                    `}

                                />

                            </button>

                        </div>

                    ))

                }

                <button

                    onClick={handleSave}

                    className="

                        mt-4

                        rounded-xl

                        bg-indigo-600

                        px-6

                        py-3

                        font-semibold

                        text-white

                        transition

                        hover:bg-indigo-700

                    "

                >

                    Save Preferences

                </button>

            </div>

        </SettingsCard>

    );

};

export default NotificationSettings;