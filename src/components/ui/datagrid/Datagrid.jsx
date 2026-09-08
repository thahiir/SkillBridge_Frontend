import {

    useState,

} from "react";

import Table from "../table/Table";
import TableHeader from "../table/TableHeader";
import TableBody from "../table/TableBody";

import Pagination from "./Pagination";
import RowsPerPage from "./RowsPerPage";
import usePagination from "./hooks/usePagination";

const DataGrid = ({

    columns,

    data,

    children,

}) => {

    const [

        page,

        setPage,

    ] = useState(1);

    const [

        rows,

        setRows,

    ] = useState(10);

    const {

        paginatedData,

        totalPages,

    } = usePagination(

        data,

        page,

        rows

    );

    return (

        <div className="space-y-6">

            <Table>

                <TableHeader

                    columns={columns}

                />

                <TableBody>

                    {children(

                        paginatedData

                    )}

                </TableBody>

            </Table>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <RowsPerPage

                    value={rows}

                    onChange={setRows}

                />

                <Pagination

                    page={page}

                    totalPages={totalPages}

                    onChange={setPage}

                />

            </div>

        </div>

    );

};

export default DataGrid;