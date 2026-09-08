import SkeletonCard from "./SkeletonCard";

const SkeletonStats = () => {

    return (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[...Array(4)].map((_, index) => (

                <SkeletonCard key={index} />

            ))}

        </div>

    );

};

export default SkeletonStats;