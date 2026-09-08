const AIWelcome = ({ onSuggestion }) => {

    const suggestions = [
        "How many pending tasks do I have?",
        "Show my high priority tasks",
        "How much have I spent?",
        "Give me a productivity summary",
    ];

    return (
        <div className="flex h-full flex-col items-center justify-center px-6 text-center">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white shadow-lg">
                ✨
            </div>

            <h1 className="text-2xl font-bold text-slate-900">
                SkillBridge AI
            </h1>

            <p className="mt-2 max-w-md text-sm text-slate-500">
                Your intelligent productivity assistant for
                tasks, expenses and productivity insights.
            </p>

            <div className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-2">

                {suggestions.map((suggestion) => (
                    <button
                        key={suggestion}
                        onClick={() =>
                            onSuggestion(suggestion)
                        }
                        className="rounded-xl border border-slate-200 bg-white p-4 text-left text-sm text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50"
                    >
                        {suggestion}
                    </button>
                ))}

            </div>

        </div>
    );
};

export default AIWelcome;