import Button from "../button/Button";

const BulkActions = ({

    count,

    onDelete,

    onClear,

}) => {

    if (!count) return null;

    return (

        <div className="flex items-center gap-4 rounded-xl bg-indigo-50 p-4">

            <p>

                {count} selected

            </p>

            <Button

                variant="danger"

                onClick={onDelete}

            >

                Delete

            </Button>

            <Button

                variant="outline"

                onClick={onClear}

            >

                Clear

            </Button>

        </div>

    );

};

export default BulkActions;