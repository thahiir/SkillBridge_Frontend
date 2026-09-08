import SearchBar from "../search/SearchBar";

const TableToolbar = ({

    search,

    setSearch,

    children,

}) => {

    return (

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <SearchBar

                value={search}

                onChange={setSearch}

                placeholder="Search..."

            />

            <div>

                {children}

            </div>

        </div>

    );

};

export default TableToolbar;