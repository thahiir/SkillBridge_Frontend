import {
    CheckCircle2,
    ClipboardList,
    IndianRupee,
    Bell,
} from "lucide-react";

const statsData = [

    {
        id: 1,
        title: "Total Tasks",
        value: 0,
        icon: ClipboardList,
        color: "from-blue-500 to-cyan-500",
    },

    {
        id: 2,
        title: "Expenses",
        value: "₹0",
        icon: IndianRupee,
        color: "from-green-500 to-emerald-500",
    },

    {
        id: 3,
        title: "Completed",
        value: 0,
        icon: CheckCircle2,
        color: "from-violet-500 to-indigo-500",
    },

    {
        id: 4,
        title: "Notifications",
        value: 0,
        icon: Bell,
        color: "from-orange-500 to-red-500",
    },

];

export default statsData;