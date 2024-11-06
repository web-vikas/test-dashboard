import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

const DashboardWrapper = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default DashboardWrapper;
