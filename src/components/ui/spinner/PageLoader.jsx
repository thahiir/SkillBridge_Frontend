import Spinner from "./Spinner";

const PageLoader = ({

    message = "Loading..."

}) => {

    return (

        <div className="flex min-h-[70vh] items-center justify-center">

            <Spinner

                size="xl"

                label={message}

            />

        </div>

    );

};

export default PageLoader;