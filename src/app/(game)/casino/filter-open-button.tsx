import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FilterCasino from "./filter-casino";
const FilterOpenButton = () => {
  return (
    <div className="md:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <button className="text-white text-lg tracking-wide font-medium">
            Filter
          </button>
        </PopoverTrigger>
        <PopoverContent className="border-none md:hidden !w-[350px]">
          <FilterCasino />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FilterOpenButton;
