import {
    Check,
    Trash2,
    ClipboardList,
    Wallet,
    Bell,
} from "lucide-react";

const NotificationCard = ({
    notification,
    onRead,
    onDelete,
}) => {

    const getIcon = () => {

        switch (notification.type) {

            case "TASK":
                return (
                    <ClipboardList
                        className="h-6 w-6 text-indigo-600"
                    />
                );

            case "EXPENSE":
                return (
                    <Wallet
                        className="h-6 w-6 text-emerald-600"
                    />
                );

            default:
                return (
                    <Bell
                        className="h-6 w-6 text-slate-600"
                    />
                );

        }

    };

    return (

        <div
            className={`rounded-2xl border p-5 shadow-sm transition

            ${
                notification.isRead

                    ? "border-slate-200 bg-white"

                    : "border-indigo-200 bg-indigo-50"

            }`}
        >

            <div className="flex items-start justify-between">

                <div className="flex gap-4">

                    <div className="mt-1">

                        {getIcon()}

                    </div>

                    <div>

                        <h3 className="font-semibold text-slate-800">

                            {notification.title}

                        </h3>

                        <p className="mt-1 text-sm text-slate-600">

                            {notification.message}

                        </p>

                        <p className="mt-2 text-xs text-slate-400">

                            {new Date(
                                notification.createdAt
                            ).toLocaleString()}

                        </p>

                    </div>

                </div>

                {!notification.isRead && (

                    <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">

                        New

                    </span>

                )}

            </div>

            <div className="mt-5 flex justify-end gap-3">

                {!notification.isRead && (

                    <button

                        onClick={() => onRead(notification._id)}

                        className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"

                    >

                        <Check size={16} />

                        Mark Read

                    </button>

                )}

                <button

                    onClick={() => onDelete(notification._id)}

                    className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"

                >

                    <Trash2 size={16} />

                    Delete

                </button>

            </div>

        </div>

    );

};

export default NotificationCard;