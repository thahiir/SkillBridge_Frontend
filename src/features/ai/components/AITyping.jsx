const AITyping = () => {
    return (
        <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm text-white">
                ✨
            </div>

            <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">

                <div className="flex gap-1">

                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />

                    <span
                        className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                        style={{
                            animationDelay: "150ms",
                        }}
                    />

                    <span
                        className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                        style={{
                            animationDelay: "300ms",
                        }}
                    />

                </div>

            </div>

        </div>
    );
};

export default AITyping;