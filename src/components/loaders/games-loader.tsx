import React from "react";
import { ScaleLoader } from "react-spinners";

const GamesLoader = () => {
  return (
    <div className="w-full h-[60vh] flex justify-center items-center">
      <ScaleLoader color="#fff" />
    </div>
  );
};

export default GamesLoader;
