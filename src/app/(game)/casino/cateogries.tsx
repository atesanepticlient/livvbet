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
    const currentUrl = window.location.pathname;
    const base = "/casino";

    let newUrl;
    if (category == "all") {
      if (currentUrl.startsWith(base)) {
        const parts = currentUrl.split("/").filter(Boolean);
        if (parts.length === 1) {
          newUrl = `${base}`;
        } else {
          newUrl = `${base}`;
        }

        window.history.pushState({}, "", newUrl);
      }
      clearFilter();
    } else {
      if (currentUrl.startsWith(base)) {
        const parts = currentUrl.split("/").filter(Boolean);
        if (parts.length === 1) {
          newUrl = `${base}/${category}`;
        } else {
          newUrl = `${base}/${category}`;
        }

        window.history.pushState({}, "", newUrl);
      }
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
