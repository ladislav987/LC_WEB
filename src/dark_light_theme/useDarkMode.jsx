import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const [theme, setTheme] = useState("dark");

    const setMode = mode => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    }

    //? prepína medzi témami
    const toggleTheme = () => {
        theme === "dark" ? setMode("light") : setMode("dark");
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme ? setTheme(localTheme) : setMode("dark");

    }, []);

    return [theme, toggleTheme];
};

export default useDarkMode;
