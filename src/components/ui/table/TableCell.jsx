const TableCell = ({

    children,

    className=""

})=>{

    return(

        <td

            className={`px-6 py-4 text-sm text-slate-700 ${className}`}

        >

            {children}

        </td>

    );

};

export default TableCell;