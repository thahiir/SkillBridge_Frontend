const SettingsCard = ({
    title,
    description,
    icon: Icon,
    action,
    children,
}) => {
    return (
        <div
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:shadow-md
            "
        >
            {/* Header */}

            <div className="flex items-start justify-between">

                <div className="flex items-center gap-4">

                    {Icon && (

                        <div
                            className="
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                bg-indigo-100
                                text-indigo-600
                            "
                        >
                            <Icon size={24} />
                        </div>

                    )}

                    <div>

                        <h2 className="text-xl font-bold text-slate-900">

                            {title}

                        </h2>

                        {description && (

                            <p className="mt-1 text-sm text-slate-500">

                                {description}

                            </p>

                        )}

                    </div>

                </div>

                {action}

            </div>

            {/* Divider */}

            <div className="my-6 border-t border-slate-200" />

            {/* Body */}

            <div>

                {children}

            </div>

        </div>
    );
};

export default SettingsCard;