import { useState, useEffect } from "react";

const ThemeHandler = () => {
  const [theme, setTheme] = useState("theme-1");

  const changeTheme = () => {
    if (theme === "theme-1") {
      setMode("theme-2");
    }
    if (theme === "theme-2") {
      setMode("theme-3");
    }
    if (theme === "theme-3") {
      setMode("theme-1");
    }
    // console.log(theme);
  };

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
    // console.log(mode + " tema v local");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme === "theme-1") {
      setMode("theme-1");
    }
    if (localTheme === "theme-2") {
      setMode("theme-2");
    }
    if (localTheme === "theme-3") {
      setMode("theme-3");
    }

  }, []);

  return [theme, changeTheme];
};

export default ThemeHandler;
