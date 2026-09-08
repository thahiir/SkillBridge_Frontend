import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import MobileSidebar from "../components/dashboard/MobileSidebar";
import TopNavbar from "../components/dashboard/TopNavbar";

const DashboardLayout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="min-h-screen bg-slate-100">

            {/* Desktop Sidebar */}

            <div className="fixed left-0 top-0 hidden h-screen lg:block">

                <Sidebar />

            </div>

            {/* Mobile Sidebar */}

            <MobileSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* Main Area */}

            <div className="lg:ml-72">

                <TopNavbar
                    onMenuClick={() => setSidebarOpen(true)}
                />

                <main className="min-h-[calc(100vh-80px)] p-6">

                    <Outlet />

                </main>

            </div>

        </div>

    );

};

export default DashboardLayout;