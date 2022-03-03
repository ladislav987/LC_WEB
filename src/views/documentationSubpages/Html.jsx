import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Svg from "../../component/Svg";
import HomeButton from "../../component/HomeButton";
import DocumentationNav from "../../component/DocumentationNav";
import ThemeButton from "../../component/ThemeButton";

import "../../scss/views.scss";

import Details from "../htmlSubpages/Details";
import Summary from "../htmlSubpages/Summary";

import HtmlMenu from "./HtmlMenu";
import HtmlSidebar from "./HtmlSidebar";

const Html = () => {
  return (
    <>
      <header>
        <nav className="topNavigationContainer">
          <Svg />
          <HomeButton />
          <DocumentationNav />
          <ThemeButton />
        </nav>
      </header>
      <div className="page_wrapper">
        <h1>HTML stránka</h1>
        <HtmlSidebar />
        <aside>
          <HtmlMenu />
        </aside>

        <main>
          <Routes>
            <Route path="details" element={<Details />} />
            <Route path="summary" element={<Summary />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Html;
