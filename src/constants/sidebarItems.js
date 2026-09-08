import {

    LayoutDashboard,

    CheckSquare,

    Wallet,

    StickyNote,

    Flame,

    BarChart3,

    Bot,

    Bell,

    User,

    Settings,

    ClipboardList,


} from "lucide-react";
import { MdMoney } from "react-icons/md";

const sidebarItems = [

    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },

    {
        name: "Tasks",
        path: "/tasks",
        icon: ClipboardList,
    },

    {
        name: "Expenses",
        path: "/expenses",
        icon: Wallet,
    },

    {
        name: "Budget",
        path: "/budget",
        icon: MdMoney,
    },

    {
        name: "Habits",
        path: "/habits",
        icon: Flame,
    },

    {
        name: "Analytics",
        path: "/analytics",
        icon: BarChart3,
    },

    {
        name: "AI Assistant",
        path: "/ai",
        icon: Bot,
    },

    {
        name: "Notifications",
        path: "/notifications",
        icon: Bell,
    },

    {
        name: "Profile",
        path: "/profile",
        icon: User,
    },

    {
        name: "Settings",
        path: "/settings",
        icon: Settings,
    },


];

export default sidebarItems;