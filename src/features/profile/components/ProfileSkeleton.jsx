const ProfileSkeleton = () => {

    return (

        <div className="animate-pulse space-y-8">

            <div className="h-10 w-72 rounded bg-slate-200" />

            <div className="grid gap-8 lg:grid-cols-3">

                <div className="space-y-8">

                    <div className="rounded-3xl bg-slate-200 h-[360px]" />

                    <div className="rounded-3xl bg-slate-200 h-[220px]" />

                </div>

                <div className="lg:col-span-2">

                    <div className="grid grid-cols-2 gap-6">

                        <div className="h-36 rounded-3xl bg-slate-200" />
                        <div className="h-36 rounded-3xl bg-slate-200" />
                        <div className="h-36 rounded-3xl bg-slate-200" />
                        <div className="h-36 rounded-3xl bg-slate-200" />

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ProfileSkeleton;