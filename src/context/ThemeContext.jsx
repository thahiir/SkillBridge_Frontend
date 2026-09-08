import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "system"
    );

    useEffect(() => {

        const appliedTheme =
            theme === "system"
                ? getSystemTheme()
                : theme;

        document.documentElement.classList.toggle(
            "dark",
            appliedTheme === "dark"
        );

        localStorage.setItem("theme", theme);

    }, [theme]);

    return (

        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >

            {children}

        </ThemeContext.Provider>

    );

};