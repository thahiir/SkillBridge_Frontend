const CurrentDate = () => {

    const today = new Date();

    const formattedDate = today.toLocaleDateString(

        "en-US",

        {

            weekday: "long",

            year: "numeric",

            month: "long",

            day: "numeric",

        }

    );

    return (

        <p className="text-sm text-light-500">

            {formattedDate}

        </p>

    );

};

export default CurrentDate;