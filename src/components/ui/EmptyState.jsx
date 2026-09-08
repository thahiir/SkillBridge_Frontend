import Button from "./Button";

const EmptyState = ({
    title,
    description,
    image,
    buttonText,
    onClick
}) => {

    return (

        <div className="text-center py-20">

            {

                image && (

                    <img

                        src={image}

                        alt={title}

                        className="w-60 mx-auto mb-8"

                    />

                )

            }

            <h2 className="text-2xl font-bold">

                {title}

            </h2>

            <p className="text-slate-500 mt-3 mb-8">

                {description}

            </p>

            {

                buttonText && (

                    <Button onClick={onClick}>

                        {buttonText}

                    </Button>

                )

            }

        </div>

    );

};

export default EmptyState;