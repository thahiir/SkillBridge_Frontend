const SkeletonBox = ({
    className = "",
}) => {

    return (

        <div
            className={`
                animate-pulse
                rounded-md
                bg-slate-200
                ${className}
            `}
        />

    );

};

export default SkeletonBox;