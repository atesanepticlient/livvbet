import React from "react";
import Nav from "./nav";
import Header from "@/components/landing/headers/Header";
import Footer from "@/components/landing/footer/Footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="bg-[#141B1F] min-h-screen pb-5 lg:pb-10">
        <div className=" container">
          <Nav />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
