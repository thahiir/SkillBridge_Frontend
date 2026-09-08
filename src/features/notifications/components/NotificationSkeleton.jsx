const NotificationSkeleton = () => {

    return (

        <div className="space-y-5">

            {Array.from({ length: 5 }).map((_, index) => (

                <div
                    key={index}
                    className="animate-pulse rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >

                    <div className="flex items-start justify-between">

                        <div className="flex gap-4">

                            <div className="h-12 w-12 rounded-full bg-slate-200"></div>

                            <div className="space-y-3">

                                <div className="h-4 w-48 rounded bg-slate-200"></div>

                                <div className="h-3 w-72 rounded bg-slate-200"></div>

                                <div className="h-3 w-40 rounded bg-slate-200"></div>

                            </div>

                        </div>

                        <div className="h-6 w-14 rounded-full bg-slate-200"></div>

                    </div>

                    <div className="mt-6 flex justify-end gap-3">

                        <div className="h-10 w-28 rounded-xl bg-slate-200"></div>

                        <div className="h-10 w-24 rounded-xl bg-slate-200"></div>

                    </div>

                </div>

            ))}

        </div>

    );

};

export default NotificationSkeleton;