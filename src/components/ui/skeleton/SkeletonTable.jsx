import Skeleton from "./Skeleton";

const SkeletonTable = ({

    rows = 5,

    columns = 4,

}) => {

    return (

        <div className="space-y-4">

            {Array.from({ length: rows }).map((_, row) => (

                <div

                    key={row}

                    className="grid gap-4"

                    style={{

                        gridTemplateColumns: `repeat(${columns},1fr)`,

                    }}

                >

                    {Array.from({

                        length: columns,

                    }).map((__, col) => (

                        <Skeleton

                            key={col}

                            className="h-5"

                        />

                    ))}

                </div>

            ))}

        </div>

    );

};

export default SkeletonTable;