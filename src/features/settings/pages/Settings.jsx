import PageHeader from "../../../components/dashboard/PageHeader";

import ThemeToggle from "../Components/ThemeToggle";
import AccountSettings from "../Components/AccountSettings";
import SecuritySettings from "../Components/SecuritySettings";
import NotificationSettings from "../Components/NotificationSettings";
import DangerZone from "../Components/DangerZone";
import LogoutButton from "../Components/LogoutButton";

const Settings = () => {
    return (
        <div className="space-y-8">

            <PageHeader
                title="Settings"
                subtitle="Manage your account preferences and application settings."
            />

            <div className="grid gap-8">

                <ThemeToggle />

                <AccountSettings />

                <SecuritySettings />

                <NotificationSettings />

                <LogoutButton/>

                <DangerZone />

            </div>

        </div>
    );
};

export default Settings;