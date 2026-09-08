import { useState } from "react";

const AIInput = ({
    onSend,
    loading,
}) => {

    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!value.trim() || loading) {
            return;
        }

        onSend(value.trim());

        setValue("");
    };

    const handleKeyDown = (event) => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {
            event.preventDefault();

            handleSubmit(event);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="border-t border-slate-200 bg-white p-4"
        >

            <div className="mx-auto flex max-w-4xl items-end gap-3">

                <textarea
                    value={value}
                    onChange={(event) =>
                        setValue(event.target.value)
                    }
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                    rows={1}
                    placeholder="Ask SkillBridge AI..."
                    className="max-h-32 min-h-[46px] flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                    type="submit"
                    disabled={
                        loading ||
                        !value.trim()
                    }
                    className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    ➤
                </button>

            </div>

            <p className="mx-auto mt-2 max-w-4xl text-xs text-slate-400">
                SkillBridge AI can help with your tasks,
                expenses and productivity.
            </p>

        </form>
    );
};

export default AIInput;