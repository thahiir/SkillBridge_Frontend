import Button from "../button/Button";

const Pagination = ({

    page,

    totalPages,

    onChange,

}) => {

    return (

        <div className="flex items-center justify-end gap-3">

            <Button

                variant="outline"

                disabled={page === 1}

                onClick={() =>

                    onChange(page - 1)

                }

            >

                Previous

            </Button>

            <span className="text-sm font-medium">

                {page} / {totalPages}

            </span>

            <Button

                variant="outline"

                disabled={

                    page === totalPages

                }

                onClick={() =>

                    onChange(page + 1)

                }

            >

                Next

            </Button>

        </div>

    );

};

export default Pagination;