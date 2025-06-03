"use client";
import React from "react";
import { categories } from "../../../../public/data/games";
import CheckInput from "@/components/input/check-input";
import { useGamesFilter } from "@/lib/store.zustond";

const Cateogries = () => {
  const {
    category: gameCategory,
    setCategory,
    clearFilter,
  } = useGamesFilter((state) => state);

  const handleSetCategory = (category: string) => {
    if (category == "all") {
      clearFilter();
    } else {
      const currentPath = window.location.pathname;
      const newUrl = `${currentPath}/${category}`;
      history.pushState(null, "", newUrl);
      setCategory(category);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 justify-between">
      {categories?.map((category, i) => (
        <CheckInput
          key={i}
          id={category.slug}
          value={category.slug}
          disabled={gameCategory == "all" && category.slug == "all"}
          name="category"
          checked={
            gameCategory == category.slug ||
            (gameCategory == "" && category.slug == "all")
          }
          getValue={(value) => handleSetCategory(value)}
          label={category.name}
        />
      ))}
    </div>
  );
};

export default Cateogries;
