import Logo from "../common/Logo";

import SidebarItem from "./SidebarItem";

import sidebarItems from "../../constants/sidebarItems";
import LogoutButton from "../../features/settings/Components/LogoutButton";



const Sidebar = () => {

    return (

        <aside
            className="
                flex
                h-full
                w-72
                flex-col
                border-r
                bg-slate-900
                px-6
                py-8
            "
        >

            <Logo />

            <nav className="mt-10 flex flex-1 flex-col gap-2">

                {

                    sidebarItems.map((item) => (

                        <SidebarItem

                            key={item.name}

                            {...item}

                        />

                    ))

                }

            </nav>

            <LogoutButton />

            <div className="rounded-xl bg-slate-800 p-4">

                <p className="text-sm text-slate-300">

                    SkillBridge v1.0

                </p>

                <p className="text-xs text-slate-500">

                    Productivity Platform

                </p>

            </div>

        </aside>

    );

};

export default Sidebar;