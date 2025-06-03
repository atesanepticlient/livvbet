import React from "react";
import Nav from "./nav";
import Header from "@/components/landing/headers/Header";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="bg-[#141B1F] min-h-screen">
        <div className=" container">
          <Nav />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
