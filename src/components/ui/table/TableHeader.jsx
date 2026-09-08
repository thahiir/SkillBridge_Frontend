const TableHeader = ({

    columns=[],

    sortable,

    onSort,

    sortField,

    sortOrder

})=>{

    return(

        <thead className="sticky top-0 bg-slate-50">

            <tr>

                {

                    columns.map((column)=>(

                        <th

                            key={column.key}

                            onClick={()=>{

                                if(

                                    sortable &&

                                    onSort

                                ){

                                    onSort(

                                        column.key

                                    );

                                }

                            }}

                            className="cursor-pointer whitespace-nowrap px-6 py-4 text-left text-sm font-semibold text-slate-700"

                        >

                            {column.label}

                            {

                                sortField===column.key && (

                                    <span className="ml-2">

                                        {

                                            sortOrder==="asc"

                                            ?

                                            "↑"

                                            :

                                            "↓"

                                        }

                                    </span>

                                )

                            }

                        </th>

                    ))

                }

            </tr>

        </thead>

    );

};

export default TableHeader;