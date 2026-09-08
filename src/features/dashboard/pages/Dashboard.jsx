import DashboardHeader from "../../../components/dashboard/DashboardHeader";
import DashboardStats from "../../../../src/components/dashboard/stats/DashboardStats";
import RecentTasks from "../../../../src/components/dashboard/widget/RecentTasks";
import RecentExpenses from "../../../../src/components/dashboard/widget/RecentExpenses";

import DashboardContent from "../../../../src/components/dashboard/DashboardContent";
import DashboardSkeleton from "../../../../src/components/ui/skeleton/DashboardSkeleton";

import useDashboard from "../hooks/useDashboard";

const Dashboard = () => {

    const {
        dashboard,
        loading,
        error,
    } = useDashboard();

    if (loading) {
        return <DashboardSkeleton />;
    }

    if (error) {
        return (
            <div className="p-8 text-red-500">
                {error}
            </div>
        );
    }

    return (

        <div className="space-y-5">

            <DashboardHeader />

            <DashboardStats
                dashboard={dashboard}
            />
            
            <DashboardContent
                dashboard={{...dashboard,
                    recentTasks:dashboard?.recentTasks || [],
                    recentExpenses:dashboard?.recentExpenses || [],
                }}
            />

        </div>

    );

};

export default Dashboard;