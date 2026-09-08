const AnalyticsSkeleton = () => {
    return (
        <div className="space-y-8 animate-pulse">

            <div className="h-10 w-48 rounded-xl bg-slate-200" />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="h-32 rounded-3xl bg-slate-200"
                    />
                ))}

            </div>

            <div className="grid gap-8 lg:grid-cols-2">

                <div className="h-96 rounded-3xl bg-slate-200" />

                <div className="h-96 rounded-3xl bg-slate-200" />

            </div>

        </div>
    );
};

export default AnalyticsSkeleton;