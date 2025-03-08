import React from "react";
import Loader from "./Loader";

const SitePreLoader = ({ width = "" }: { width?: string }) => {
  return (
    <div className="w-full h-screen z-[1000000000] bg-secondary flex justify-center items-center fixed top-0 left-0">
      <div className={`w-[75px] ${width}`}>
        <Loader />
      </div>
    </div>
  );
};

export default SitePreLoader;
