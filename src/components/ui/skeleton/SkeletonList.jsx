import Skeleton from "./Skeleton";

const SkeletonList = ({

    items = 5,

}) => {

    return (

        <div className="space-y-4">

            {Array.from({

                length: items,

            }).map((_, index) => (

                <div

                    key={index}

                    className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4"

                >

                    <Skeleton className="h-12 w-12 rounded-full" />

                    <div className="flex-1 space-y-2">

                        <Skeleton className="h-5 w-1/3" />

                        <Skeleton className="h-4 w-2/3" />

                    </div>

                </div>

            ))}

        </div>

    );

};

export default SkeletonList;