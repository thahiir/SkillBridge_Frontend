const TableRow = ({

    children,

    onClick

})=>{

    return(

        <tr

            onClick={onClick}

            className="border-t transition hover:bg-slate-50"

        >

            {children}

        </tr>

    );

};

export default TableRow;