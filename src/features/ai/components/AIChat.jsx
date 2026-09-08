import AIMessage from "./AIMessage";
import AIInput from "./AIInput";
import AITyping from "./AITyping";
import AIWelcome from "./AIWelcome";

const AIChat = ({
    messages,
    loading,
    onSend,
    onClear,
}) => {

    return (
        <div className="flex h-[calc(100vh-128px)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">

            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">

                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                        ✨
                    </div>

                    <div>

                        <h1 className="font-semibold text-slate-900">
                            SkillBridge AI
                        </h1>

                        <p className="text-xs text-slate-400">
                            Your productivity assistant
                        </p>

                    </div>

                </div>

                {messages.length > 0 && (
                    <button
                        onClick={onClear}
                        className="rounded-lg px-3 py-2 text-xs font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        Clear
                    </button>
                )}

            </div>


            {/* Messages */}

            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">

                {messages.length === 0 ? (

                    <AIWelcome
                        onSuggestion={onSend}
                    />

                ) : (

                    <div className="mx-auto max-w-4xl space-y-6">

                        {messages.map((item) => {

                            if (
                                item.role === "user"
                            ) {

                                return (
                                    <div
                                        key={item.id}
                                        className="flex justify-end"
                                    >

                                        <div className="max-w-2xl rounded-2xl rounded-tr-sm bg-indigo-600 px-5 py-3 text-sm leading-6 text-white shadow-sm">
                                            {item.content}
                                        </div>

                                    </div>
                                );
                            }

                            return (
                                <AIMessage
                                    key={item.id}
                                    message={item}
                                />
                            );
                        })}

                        {loading && (
                            <AITyping />
                        )}

                    </div>
                )}

            </div>


            {/* Input */}

            <AIInput
                onSend={onSend}
                loading={loading}
            />

        </div>
    );
};

export default AIChat;