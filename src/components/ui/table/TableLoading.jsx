import Skeleton from "../skeleton/Skeleton";

const TableLoading = ({

    rows=5,

    columns=5

})=>{

    return(

        <tbody>

            {

                Array.from({

                    length:rows

                }).map((_,i)=>(

                    <tr key={i}>

                        {

                            Array.from({

                                length:columns

                            }).map((_,j)=>(

                                <td

                                    key={j}

                                    className="px-6 py-4"

                                >

                                    <Skeleton className="h-5 w-full"/>

                                </td>

                            ))

                        }

                    </tr>

                ))

            }

        </tbody>

    );

};

export default TableLoading;