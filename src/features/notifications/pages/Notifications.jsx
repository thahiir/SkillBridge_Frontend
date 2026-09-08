import PageHeader from "../../../components/dashboard/PageHeader";

import NotificationList from "../components/NotificationList";
import NotificationSkeleton from "../components/NotificationSkeleton";

import useNotifications from "../hooks/useNotifications";
import useReadNotification from "../hooks/useReadNotification";
import useDeleteNotification from "../hooks/useDeleteNotification";
import useMarkAllRead from "../hooks/useMarkAllRead";

const Notifications = () => {

    const {

        notifications,

        loading,

        error,

        fetchNotifications,

    } = useNotifications();

    const { markAsRead } = useReadNotification();

    const { removeNotification } = useDeleteNotification();

    const { markAllRead } = useMarkAllRead();

    const handleRead = async (id) => {

        await markAsRead(id);

        fetchNotifications();

    };

    const handleDelete = async (id) => {

        await removeNotification(id);

        fetchNotifications();

    };

    const handleMarkAllRead = async () => {

        await markAllRead();

        fetchNotifications();

    };

    if (loading) {

        return <NotificationSkeleton />;

    }

    if (error) {

        return (

            <h2 className="text-center text-red-500">

                Failed to load notifications.

            </h2>

        );

    }

    const unreadCount = notifications.filter(
        (notification) => !notification.isRead
    ).length;

    return (

        <div className="space-y-8">

            <PageHeader

                title="Notifications"

                subtitle="Stay updated with your latest activities."

            />

            <div className="flex items-center justify-between">

                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">

                    {unreadCount} Unread

                </span>

                <button

                    onClick={handleMarkAllRead}

                    disabled={unreadCount === 0}

                    className="rounded-xl bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"

                >

                    Mark All Read

                </button>

            </div>

            <NotificationList

                notifications={notifications}

                onRead={handleRead}

                onDelete={handleDelete}

            />

        </div>

    );

};

export default Notifications;