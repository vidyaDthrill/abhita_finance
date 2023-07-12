import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/styles/AppLayout.css";
import "../assets/styles/MediaQueries/AppLayoutMedia.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";

export default function AppLayout() {
  return (
    <>
      <div className="main-wrapper">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">
          <Header />
          <div className="mx-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
