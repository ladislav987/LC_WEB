import React from "react";
import { Routes, Route } from "react-router-dom";

import Svg from "../../component/Svg";
import HomeButton from "../../component/HomeButton";
import DocumentationNav from "../../component/DocumentationNav";
import ThemeButton from "../../component/ThemeButton";

import "../../scss/views.scss";

import Details from "../htmlSubpages/Details";
import Summary from "../htmlSubpages/Summary";

import HtmlSideMenu from "../../component/SideMenuComponent/HtmlSideMenu";
import Sidebar from "../../component/Sidebar";

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
        <Sidebar />
        <aside>
          <HtmlSideMenu />
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
