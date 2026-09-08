import { Link } from "react-router-dom";

const EmptyWidget = ({
    icon: Icon,
    title,
    description,
    buttonText,
    buttonLink,
}) => {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">

            <div className="mb-5 rounded-full bg-indigo-100 p-4">
                <Icon
                    size={36}
                    className="text-indigo-600"
                />
            </div>

            <h3 className="text-lg font-semibold text-slate-800">
                {title}
            </h3>

            <p className="mt-2 max-w-xs text-sm text-slate-500">
                {description}
            </p>

            <Link
                to={buttonLink}
                className="mt-6 rounded-xl bg-indigo-600 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-700"
            >
                {buttonText}
            </Link>

        </div>
    );
};

export default EmptyWidget;