import SkeletonBox from "./SkeletonBox";

const SkeletonCard = () => {

    return (

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <SkeletonBox className="h-5 w-28" />

            <SkeletonBox className="mt-5 h-10 w-20" />

            <SkeletonBox className="mt-6 h-4 w-36" />

        </div>

    );

};

export default SkeletonCard;