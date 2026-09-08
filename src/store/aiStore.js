import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAIStore = create(
    persist(
        (set) => ({
            messages: [],

            isLoading: false,

            error: null,

            addMessage: (message) =>
                set((state) => ({
                    messages: [
                        ...state.messages,
                        message,
                    ],
                })),

            setMessages: (messages) =>
                set({
                    messages,
                }),

            setLoading: (isLoading) =>
                set({
                    isLoading,
                }),

            setError: (error) =>
                set({
                    error,
                }),

            clearChat: () =>
                set({
                    messages: [],
                    error: null,
                }),
        }),
        {
            name: "skillbridge-ai-chat",
        }
    )
);

export default useAIStore;