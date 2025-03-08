"use client";
import React from "react";
import BetSlipCard from "./BetSlipCard";
import BetSlipOverall from "./BetSlipOverall";

const betSlipData = {
  eventName: "Cricket ICC Champions Trophy",
  sports: "cricket",
  teams: {
    team1: {
      name: "Bangladesh",
      flag: "https://flagcdn.com/w40/bd.png",
    },
    team2: {
      name: "Pakistan",
      flag: "https://flagcdn.com/w40/pk.png",
    },
  },
  odds: {
    team1: "team1",
    odd: 1.335,
  },
  redirectPath: "#",
  deleteAction: () => console.log("Clicked on delete button"),
};

const BetSlip = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2   flex flex-col gap-1">
          <BetSlipCard data={betSlipData} />
        </div>
        <div className="w-full md:w-1/2 py-3 md:py-4 px-2 md:px-3">
          <BetSlipOverall />
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
