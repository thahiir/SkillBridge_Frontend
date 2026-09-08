import { sendAIMessage } from "../api/aiApi";
import useAIStore from "../../../store/aiStore";

const useAIChat = () => {

    const messages = useAIStore(
        (state) => state.messages
    );

    const isLoading = useAIStore(
        (state) => state.isLoading
    );

    const error = useAIStore(
        (state) => state.error
    );

    const addMessage = useAIStore(
        (state) => state.addMessage
    );

    const setLoading = useAIStore(
        (state) => state.setLoading
    );

    const setError = useAIStore(
        (state) => state.setError
    );

    const clearChat = useAIStore(
        (state) => state.clearChat
    );

    const sendMessage = async (message) => {

        if (!message?.trim()) {
            return;
        }

        const userMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content: message,
        };

        addMessage(userMessage);

        setLoading(true);
        setError(null);

        try {

            const response =
                await sendAIMessage(message);

            const assistantMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                response: response.reply,
            };

            addMessage(assistantMessage);

        } catch (err) {

            console.error(
                "AI Frontend Error:",
                err
            );

            const errorMessage =
                err?.response?.data?.message ||
                err?.message ||
                "Unable to connect to SkillBridge AI.";

            setError(errorMessage);

            addMessage({
                id: crypto.randomUUID(),
                role: "assistant",
                response: {
                    type: "general",
                    title: "AI Error",
                    message: errorMessage,
                    data: {},
                    recommendations: [],
                    actions: [],
                },
            });

        } finally {

            setLoading(false);

        }
    };

    return {
        messages,
        isLoading,
        error,
        sendMessage,
        clearChat,
    };
};

export default useAIChat;