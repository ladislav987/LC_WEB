import React from "react";
import HomeButton from "../../component/HomeButton";
import Svg from "../../component/Svg";
import ThemeButton from "../../component/ThemeButton";

import "../../scss/Portfolio.scss";

const Portfolio = () => {
  return (
    <>
      <header>
        <nav className="topNavigationContainer">
          <Svg />
          <HomeButton />
          <ThemeButton />
        </nav>
      </header>
      <div className="gridMenu">
        <div className="gridPortfolioContainer">
          <a
            className="itemPortfolio tipsCalculatorJS "
            href="https://lc-tips-calculator-js.netlify.app/"
          >
            <p className="tipsCalculatorJSP">Tips Calculator JS</p>
          </a>

          <a
            className="itemPortfolio tipsCalculatorReact "
            href="http://lc-tips-calculator-react.netlify.app/"
          >
            <p className="tipsCalculatorReactP">Tips Calculator React</p>
          </a>

          <a
            className="itemPortfolio calculatorJS "
            href="https://lc-calculator.netlify.app/"
          >
            <p className="calculatorJSP">Calculator JS</p>
          </a>

          <a
            className="itemPortfolio snakeJS "
            href="https://lc-snake.netlify.app/"
          >
            <p className="snakeJSP">Snake JS</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
