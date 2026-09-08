const DashboardSkeleton = () => {

    return (

        <div className="space-y-8 animate-pulse">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div className="space-y-3">

                    <div className="h-8 w-60 rounded bg-slate-200" />

                    <div className="h-4 w-40 rounded bg-slate-200" />

                </div>

                <div className="h-10 w-10 rounded-full bg-slate-200" />

            </div>

            {/* Stats */}

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {[...Array(4)].map((_, index) => (

                    <div
                        key={index}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                        <div className="h-5 w-24 rounded bg-slate-200" />

                        <div className="mt-5 h-10 w-16 rounded bg-slate-200" />

                        <div className="mt-6 h-3 w-32 rounded bg-slate-200" />

                    </div>

                ))}

            </div>

            {/* Widgets */}

            <div className="grid gap-6 xl:grid-cols-12">

                {[7,5].map((span,index)=>(

                    <div
                        key={index}
                        className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${
                                    span === 7 ? "xl:col-span-7" : "xl:col-span-5"
                                    }`}
                    >

                        <div className="mb-6 h-6 w-40 rounded bg-slate-200" />

                        <div className="space-y-4">

                            {[...Array(4)].map((_,i)=>(

                                <div
                                    key={i}
                                    className="rounded-2xl border border-slate-100 p-5"
                                >

                                    <div className="h-5 w-48 rounded bg-slate-200" />

                                    <div className="mt-3 h-4 w-full rounded bg-slate-200" />

                                    <div className="mt-2 h-4 w-3/4 rounded bg-slate-200" />

                                </div>

                            ))}

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default DashboardSkeleton;