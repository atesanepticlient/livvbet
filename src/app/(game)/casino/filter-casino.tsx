"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Providers from "./providers";
import Cateogries from "./cateogries";
import { useGamesFilter } from "@/lib/store.zustond";

const FilterCasino = () => {
  const { clearFilter } = useGamesFilter((state) => state);

  const handleClear = () => {
    clearFilter();
  };

  return (
    <div className="border border-[#30353b] bg-[#141B1F] py-3 md:py-5 lg:py-6 w-full ">
      <div className="pb-4 md:pb-6 px-2   flex items-center justify-end">
        <button
          onClick={() => handleClear()}
          className="text-[#999999] tracking-wide font-medium text-sm hover:text-white hover:transition-colors"
        >
          Clear Filter
        </button>
      </div>

      <Accordion type="multiple" defaultValue={["item-1"]}>
        <AccordionItem value="item-1" className="border-none mb-2">
          <AccordionTrigger className="bg-[#262B31] uppercase hover:no-underline border-t border-b border-s-2 border-e-2 text-center flex !justify-center border-s-[#ffffff59] border-e-[#ffffff59] text-white border-t-[#30353b] border-b-[#30353b] tracking-wide font-normal !py-3">
            Provider
          </AccordionTrigger>
          <AccordionContent className="!p-0 max-h-[400px] overflow-y-auto">
            <Providers />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="bg-[#262B31] uppercase hover:no-underline border-t border-b border-s-2 border-e-2 text-center flex !justify-center border-s-[#ffffff59] border-e-[#ffffff59] text-white border-t-[#30353b] border-b-[#30353b] tracking-wide font-normal !py-3">
            Categories
          </AccordionTrigger>
          <AccordionContent className="!px-4 !py-5 max-h-[400px] overflow-y-auto ">
            <Cateogries />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterCasino;
