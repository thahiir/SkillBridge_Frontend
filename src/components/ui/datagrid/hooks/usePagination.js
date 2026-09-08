import { useMemo } from "react";

const usePagination = (

    data,

    page,

    rowsPerPage

) => {

    const totalPages = Math.ceil(

        data.length / rowsPerPage

    );

    const paginatedData = useMemo(() => {

        const start =

            (page - 1) *

            rowsPerPage;

        return data.slice(

            start,

            start + rowsPerPage

        );

    }, [

        data,

        page,

        rowsPerPage,

    ]);

    return {

        totalPages,

        paginatedData,

    };

};

export default usePagination;