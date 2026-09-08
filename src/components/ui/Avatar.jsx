const Avatar = ({
    src,
    name = "U",
    size = 48
}) => {

    return src ? (

        <img

            src={src}

            alt={name}

            style={{

                width: size,

                height: size

            }}

            className="rounded-full object-cover"

        />

    ) : (

        <div

            style={{

                width: size,

                height: size

            }}

            className="rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold"

        >

            {name.charAt(0).toUpperCase()}

        </div>

    );

};

export default Avatar;