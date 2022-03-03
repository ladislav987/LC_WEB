import { useEffect, useContext, useCallback } from "react";

import {Context} from "../App";

const ThemeHandler = () => {
  const [theme, setTheme] = useContext(Context);

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
  };

  const setMode = useCallback(
    (mode) => {
      window.localStorage.setItem("theme", mode);
      setTheme(mode);
    },
    [setTheme]
  );


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
  }, [setMode]);

  return changeTheme;
};

export default ThemeHandler;
