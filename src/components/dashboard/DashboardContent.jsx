import RecentTasks from "../dashboard/widget/RecentTasks";
import RecentExpenses from "../dashboard/widget/RecentExpenses";

const DashboardContent = ({ dashboard }) => {

    return (

        <section className="grid gap-6 xl:grid-cols-12">

            {/* Recent Tasks */}

            <div className="xl:col-span-7">

                <RecentTasks
                    tasks={dashboard.recentTasks}
                />

            </div>

            {/* Recent Expenses */}

            <div className="xl:col-span-5">

                <RecentExpenses
                    expenses={dashboard.recentExpenses}
                />

            </div>

        </section>

    );

};

export default DashboardContent;