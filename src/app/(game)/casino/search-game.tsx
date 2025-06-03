/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useGamesFilter } from "@/lib/store.zustond";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchGame = () => {
  const setSearch = useGamesFilter((state) => state.setSearch);
  const [search, setValue] = useState("");

  useEffect(() => {
    setSearch(search);
  }, [search]);

  return (
    <div className="w-[220px] md:w-[250px] relative">
      <input
        value={search}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className="bg-[#141B1F]  outline-none rounded-sm py-2 lg:py-3 pl-9 pr-4 text-sm placeholder:text-[#999999] text-[#999999] border border-[#30353b] w-full"
      />
      <IoSearch className="w-4 h-4 text-white absolute left-3 top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default SearchGame;
