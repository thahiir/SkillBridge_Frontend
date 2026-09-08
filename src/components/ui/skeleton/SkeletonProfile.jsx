import Skeleton from "./Skeleton";

const SkeletonProfile = () => {

    return (

        <div className="rounded-2xl bg-white p-8 shadow-md">

            <div className="flex items-center gap-6">

                <Skeleton className="h-24 w-24 rounded-full" />

                <div className="flex-1 space-y-4">

                    <Skeleton className="h-6 w-48" />

                    <Skeleton className="h-4 w-72" />

                    <Skeleton className="h-4 w-52" />

                </div>

            </div>

        </div>

    );

};

export default SkeletonProfile;