import { TriangleAlert } from "lucide-react";
import SettingsCard from "./SettingsCard";

const DangerZone = () => {

    return (

        <SettingsCard

            title="Danger Zone"

            description="Permanent account actions."

            icon={TriangleAlert}

        >

            <p className="text-red-600 font-medium">

                Delete account functionality will be added later.

            </p>

        </SettingsCard>

    );

};

export default DangerZone;