"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { useCasinoSearch } from "@/store/useStore";

import { GrFormClose } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
const CasinoSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const { setSearch, setSearchShow } = useCasinoSearch((state) => state);
  return (
    <div className="flex items-center w-full h-[40px] absolute top-0 left-0">
      <button
        className="w-[50px] h-full bg-[#4d8ab9] flex items-center justify-center"
        onClick={() => setSearchShow(false)}
      >
        <GrFormClose className="w-6 h-6 text-white" />
      </button>
      <Input
        className="flex-1 bg-white text-black placeholder:text-black text-sm border-none h-full"
        placeholder="Search"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className="w-[50px] h-full bg-brand-foreground flex items-center justify-center"
        onClick={() => setSearch(searchValue)}
      >
        <IoSearchSharp className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default CasinoSearch;
