import SkeletonBox from "./SkeletonBox";
import SkeletonStats from "./SkeletonStats";

const DashboardSkeleton = () => {

    return (

        <div className="space-y-8">

            <div className="flex items-center justify-between">

                <div>

                    <SkeletonBox className="h-8 w-56" />

                    <SkeletonBox className="mt-3 h-4 w-40" />

                </div>

                <SkeletonBox className="h-10 w-10 rounded-full" />

            </div>

            <SkeletonStats />

        </div>

    );

};

export default DashboardSkeleton;