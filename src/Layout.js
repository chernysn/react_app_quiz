import React from "react";
import "./Layout.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navbar";
import Quiz from "./Quiz";
import About from "./About";
import NoPage from "./NoPage";

function Layout() {
  return (
    <div className="frame">
      <Quiz />
    </div>
  );
}

export default Layout;
