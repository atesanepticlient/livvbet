import React from "react";
import { Button } from "../ui/button";

const BetSlipOverall = () => {
  return (
    <div>
      <ul>
        <li className="flex items-center justify-between py-1 md:py-2">
          <span className="text-xs md:text-sm font-semibold md:font-bold text-muted">
            Overall odds
          </span>

          <span className="text-xs md:text-sm underline font-bold text-primary">
            1.335
          </span>
        </li>

        <li className="flex items-center justify-between py-1 md:py-2">
          <span className="text-xs md:text-sm font-semibold  text-muted">
            Stake BDT
          </span>
          <div className="flex items-center">
            <button className="p-2 flex items-center w-[30px]  justify-center bg-muted text-accent text-sm uppercase">
              -
            </button>
            <input className="bg-transparent border border-border outline-none text-xs text-muted p-2" />
            <button className="p-2 flex items-center w-[30px] justify-center bg-muted text-accent text-sm uppercase">
              +
            </button>
          </div>
        </li>

        <li className="flex items-center justify-between py-1 md:py-2">
          <span className="text-xs md:text-sm font-semibold  text-muted">
            Balance BDT
          </span>

          <span className="text-xs md:text-sm font-semibold  text-muted">
            200.00
          </span>
        </li>

        <li className="flex items-center justify-between py-1 md:py-2">
          <span className="text-xs md:text-sm font-semibold  text-muted">
            Potential Winnings
          </span>

          <span className="text-xs md:text-sm font-semibold  text-muted">
            290.00
          </span>
        </li>
      </ul>

      <div className="flex items-center justify-end">
        <Button className="bg-gradient-to-r from-[#93c738] to-[#658726] mt-2 md:mt-3 text-white">
          PLACE BET
        </Button>
      </div>
    </div>
  );
};

export default BetSlipOverall;
