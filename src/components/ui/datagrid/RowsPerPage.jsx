const RowsPerPage = ({

    value,

    onChange,

}) => {

    return (

        <div className="flex items-center gap-3">

            <span className="text-sm">

                Rows

            </span>

            <select

                value={value}

                onChange={(e) =>

                    onChange(

                        Number(

                            e.target.value

                        )

                    )

                }

                className="rounded-lg border px-3 py-2"

            >

                <option value={10}>10</option>

                <option value={25}>25</option>

                <option value={50}>50</option>

                <option value={100}>100</option>

            </select>

        </div>

    );

};

export default RowsPerPage;