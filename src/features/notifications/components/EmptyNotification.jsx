import { Bell } from "lucide-react";

const EmptyNotification = () => {

    return (

        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-16 shadow-sm">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">

                <Bell
                    className="h-10 w-10 text-indigo-600"
                />

            </div>

            <h2 className="mt-6 text-2xl font-semibold text-slate-800">

                You're all caught up!

            </h2>

            <p className="mt-3 max-w-md text-center text-slate-500">

                No notifications at the moment.
                We'll notify you when there's something important,
                like new tasks, expenses, reminders, or updates.

            </p>

        </div>

    );

};

export default EmptyNotification;