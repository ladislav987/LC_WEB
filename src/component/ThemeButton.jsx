import {useContext } from "react";

import { Context } from "../App";

import ThemeHandler from "../theme/themeHandler";

import { IconContext } from "react-icons";

import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillCloudMoonFill,
} from "react-icons/bs";

const ThemeButton = () => {
  const [theme] = useContext(Context);
  let Component = BsFillSunFill;

   if (theme === "theme-1") {
     Component = BsFillSunFill;
   }
   if (theme === "theme-2") {
     Component = BsFillMoonFill;
   }
   if (theme === "theme-3") {
     Component = BsFillCloudMoonFill;
   }
  return (
    <IconContext.Provider
      value={{ size:"2em" }}
    >
      <button className="btn theme_btn" onClick={ThemeHandler()}>
        <Component />
      </button>
    </IconContext.Provider>
  );
};

export default ThemeButton;
