import React from "react";

import HomeButton from "../../component/HomeButton";
import Svg from "../../component/Svg";
import ThemeButton from "../../component/ThemeButton";

const Other = () => {
  return (
    <>
      <header>
        <nav className="hornaNav">
          <Svg />
          <HomeButton />
          <ThemeButton />
        </nav>
      </header>
      Other !
    </>
  );
};

export default Other;
