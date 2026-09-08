import { Monitor, Moon, Sun } from "lucide-react";

import SettingsCard from "./SettingsCard";

import useTheme from "../../../hooks/useTheme";

const ThemeToggle = () => {

    const {

        theme,

        setTheme,

    } = useTheme();

    const options = [

        {
            label: "Light",
            value: "light",
            icon: Sun,
        },

        {
            label: "Dark",
            value: "dark",
            icon: Moon,
        },

        {
            label: "System",
            value: "system",
            icon: Monitor,
        },

    ];

    return (

        <SettingsCard

            title="Appearance"

            description="Choose your preferred theme."

        >

            <div className="grid gap-4 md:grid-cols-3">

                {

                    options.map((item) => {

                        const Icon = item.icon;

                        const active =
                            theme === item.value;

                        return (

                            <button

                                key={item.value}

                                onClick={() =>
                                    setTheme(item.value)
                                }

                                className={`
                                    rounded-2xl
                                    border
                                    p-6
                                    transition

                                    ${active
                                        ? "border-indigo-600 bg-indigo-50"
                                        : "border-slate-200 hover:bg-slate-50"
                                    }
                                `}
                            >

                                <Icon
                                    className="mx-auto mb-3"
                                    size={26}
                                />

                                <p className="font-semibold">

                                    {item.label}

                                </p>

                            </button>

                        );

                    })

                }

            </div>

        </SettingsCard>

    );

};

export default ThemeToggle;