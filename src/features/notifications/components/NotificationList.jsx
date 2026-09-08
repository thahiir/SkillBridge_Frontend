import NotificationCard from "./NotificationCard";
import EmptyNotification from "./EmptyNotification";

const NotificationList = ({
    notifications,
    onRead,
    onDelete,
}) => {

    if (!notifications || notifications.length === 0) {

        return <EmptyNotification />;

    }

    return (

        <div className="space-y-5">

            {notifications.map((notification) => (

                <NotificationCard

                    key={notification._id}

                    notification={notification}

                    onRead={onRead}

                    onDelete={onDelete}

                />

            ))}

        </div>

    );

};

export default NotificationList;