import PageHeader from "../../../components/dashboard/PageHeader";

import ThemeToggle from "../components/ThemeToggle";
import AccountSettings from "../components/AccountSettings";
import SecuritySettings from "../components/SecuritySettings";
import NotificationSettings from "../components/NotificationSettings";
import DangerZone from "../components/DangerZone";
import LogoutButton from "../components/LogoutButton";

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