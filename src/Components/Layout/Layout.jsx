import React from "react";
import Navbar from "./../Navbar/Navbar";

import { Outlet } from "react-router-dom";

export default function Layout({ userData, logOut }) {
  return (
    <>
      <Navbar userData={userData} logOut={logOut} />
      <div className="container my-2">
        <Outlet></Outlet>
      </div>
    </>
  );
}
