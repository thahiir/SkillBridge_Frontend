import AIChat from "../components/AIChat";
import useAIChat from "../hooks/useAIChat";

const AI = () => {

    const {
        messages,
        loading,
        sendMessage,
        clearChat,
    } = useAIChat();

    return (
        <div className="h-full">

            <AIChat
                messages={messages}
                loading={loading}
                onSend={sendMessage}
                onClear={clearChat}
            />

        </div>
    );
};

export default AI;