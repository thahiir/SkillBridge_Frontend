import { useState, useEffect } from "react";

import PageHeader from "../../../components/dashboard/PageHeader";

import ProfileCard from "../components/ProfileCards";
import ProfileForm from "../components/ProfileForm";
import AvatarUpload from "../components/AvatarUpload";
import ProfileStats from "../components/ProfileStats";
import ProfileSkeleton from "../components/ProfileSkeleton";


import useProfile from "../hooks/useProfile";

import { getTaskSummary } from "../../tasks/api/taskApi";
import { getExpenseSummary } from "../../expenses/api/expenseApi";
import { getNotificationSummary } from "../../notifications/api/notificationApi";

const Profile = () => {

    const {

        profile,

        loading,

        error,

        fetchProfile,

    } = useProfile();

    const [editing, setEditing] = useState(false);

    const [taskSummary, setTaskSummary] = useState(null);

    const [expenseSummary, setExpenseSummary] = useState(null);

    const [notificationSummary, setNotificationSummary] = useState(null);

    useEffect(() => {

        const fetchStats = async () => {

            try {

                const [

                    task,

                    expense,

                    notification,

                ] = await Promise.all([

                    getTaskSummary(),

                    getExpenseSummary(),

                    getNotificationSummary(),

                ]);

                setTaskSummary(task.summary);

                setExpenseSummary(expense.summary);

                setNotificationSummary(notification.summary);

            } catch (error) {

                console.error(error);

            }

        };

        fetchStats();

    }, []);

    if (loading) {

        return <ProfileSkeleton />;

    }

    if (error) {

        return <h2>Unable to load profile.</h2>;

    }

    return (

        <div className="space-y-8">

            <PageHeader

                title="Profile"

                subtitle="Manage your personal information"

            />

            <div className="grid gap-8 lg:grid-cols-3">

                {/* Left Side */}

                <div className="space-y-8">

                    <ProfileCard

                        profile={profile}

                        onEdit={() => setEditing(true)}

                    />

                    <AvatarUpload

                        profile={profile}

                        fetchProfile={fetchProfile}

                    />

                </div>

                {/* Right Side */}

                <div className="space-y-8 lg:col-span-2">

                    <ProfileStats

                        taskSummary={taskSummary}

                        expenseSummary={expenseSummary}

                        notificationSummary={notificationSummary}

                    />

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                        <h2 className="mb-6 text-2xl font-bold">

                            {editing

                                ? "Edit Profile"

                                : "Profile Information"}

                        </h2>

                        {

                            editing ? (

                                <ProfileForm

                                    profile={profile}

                                    onSuccess={() => {

                                        fetchProfile();

                                        setEditing(false);

                                    }}

                                    onCancel={() => {

                                        setEditing(false);

                                    }}

                                />

                            ) : (

                                <div className="space-y-5">

                                    <div>

                                        <p className="text-sm text-slate-500">

                                            Full Name

                                        </p>

                                        <h3 className="text-lg font-semibold">

                                            {profile.Fullname}

                                        </h3>

                                    </div>

                                    <div>

                                        <p className="text-sm text-slate-500">

                                            Email

                                        </p>

                                        <h3 className="text-lg font-semibold">

                                            {profile.Email}

                                        </h3>

                                    </div>

                                    <div>

                                        <p className="text-sm text-slate-500">

                                            Phone Number

                                        </p>

                                        <h3 className="text-lg font-semibold">

                                            {profile.PhoneNo}

                                        </h3>

                                    </div>

                                </div>

                            )

                        }

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Profile;