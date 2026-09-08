import { User } from "lucide-react";
import { NavLink } from "react-router-dom";

import SettingsCard from "./SettingsCard";
import useProfile from "../../profile/hooks/useProfile";

const AccountSettings = () => {

    const {

        profile,

        loading,

    } = useProfile();

    if (loading) {

        return (

            <SettingsCard
                title="Account"
                description="Manage your account information."
                icon={User}
            >

                <p>Loading account...</p>

            </SettingsCard>

        );

    }

    return (

        <SettingsCard

            title="Account"

            description="Manage your personal information."

            icon={User}

        >

            <div className="flex flex-col gap-8 md:flex-row md:items-center">

                {/* Avatar */}

                <img

                    src={
                        profile?.profileImage ||

                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            profile?.Fullname || "User"
                        )}`
                    }

                    alt="Profile"

                    className="h-24 w-24 rounded-full border-4 border-indigo-100 object-cover"

                />

                {/* Information */}

                <div className="flex-1 space-y-4">

                    <div>

                        <p className="text-sm text-slate-500">

                            Full Name

                        </p>

                        <h3 className="text-lg font-semibold">

                            {profile?.Fullname}

                        </h3>

                    </div>

                    <div>

                        <p className="text-sm text-slate-500">

                            Email

                        </p>

                        <h3 className="font-medium">

                            {profile?.Email}

                        </h3>

                    </div>

                    <div>

                        <p className="text-sm text-slate-500">

                            Phone

                        </p>

                        <h3 className="font-medium">

                            {profile?.PhoneNo}

                        </h3>

                    </div>

                </div>

                {/* Buttons */}

                <div className="flex flex-col gap-3">

                    <NavLink

                        to="/profile"

                        className="rounded-xl bg-indigo-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"

                    >

                        View Profile

                    </NavLink>

                    <NavLink

                        to="/profile"

                        className="rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold transition hover:bg-slate-100"

                    >

                        Edit Profile

                    </NavLink>

                </div>

            </div>

        </SettingsCard>

    );

};

export default AccountSettings;