"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

import logo from "@/../public/assets/svg/logo2.svg";

import {
  MdSportsBaseball,
  MdSportsEsports,
  MdEmojiEvents,
  MdOutlineCasino,
  MdLiveTv,
} from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "@/lib/utils";

import AuthButtons from "@/components/auth/AuthButtons";
const Menusm = ({ children }: { children: React.ReactNode }) => {
  const [seletecdMenuItem, setSelectedMenuItem] = useState("");

  const handleSelectMenuIcem = (item: string) => {
    if (seletecdMenuItem == item) {
      setSelectedMenuItem("");
    } else {
      setSelectedMenuItem(item);
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle className=" relative">
              <Link href="/" className="max-w-max relative bg-red-500">
                <Image
                  src={logo}
                  alt="1XBet Companl"
                  className="w-[80px] md:w-[100px] "
                />
              </Link>
              <span className="absolute top-0 left-24 text-[10px] text-white bg-brand-foreground rounded-sm  w-max text-center px-1 leading-[14px] uppercase">
                Company
              </span>
            </SheetTitle>
          </SheetHeader>

          <div className="h-full flex flex-col">
            <nav className="mt-5 flex  items-center flex-col flex-1 max-h-[75vh] overflow-x-hidden overflow-y-auto scrollbar-min">
              <div className="w-full">
                <button
                  onClick={() => handleSelectMenuIcem("top-event")}
                  className="w-full py-2 flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <MdEmojiEvents className="text-white w-5 h-5" />
                    <span className="text-sm font-medium text-white">
                      Top Event
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={cn(
                      "text-white w-4 h-4 transition-all",
                      `${seletecdMenuItem == "top-event" && "rotate-180"}`
                    )}
                  />
                </button>

                {seletecdMenuItem == "top-event" && (
                  <ul className="px-2 list-decimal">
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        EPL
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        LaLiga
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <div className="w-full">
                <button
                  onClick={() => handleSelectMenuIcem("sports")}
                  className=" w-full py-2 flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <MdSportsBaseball className="text-white w-4 h-4" />
                    <span className="text-sm font-medium text-white">
                      Spotrs
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={cn(
                      "text-white w-4 h-4 transition-all",
                      `${seletecdMenuItem == "sports" && "rotate-180"}`
                    )}
                  />
                </button>

                {seletecdMenuItem == "sports" && (
                  <ul className="px-2 list-decimal">
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Cricket
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Soccer
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <div className="w-full">
                <button
                  onClick={() => handleSelectMenuIcem("live")}
                  className=" w-full py-2 flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <MdLiveTv className="text-white w-4 h-4" />
                    <span className="text-sm font-medium text-white">Live</span>
                  </div>
                  <IoIosArrowDown
                    className={cn(
                      "text-white w-4 h-4 transition-all",
                      `${seletecdMenuItem == "live" && "rotate-180"}`
                    )}
                  />
                </button>

                {seletecdMenuItem == "live" && (
                  <ul className="px-2 list-decimal">
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Bet On Your Nation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Multi-Live
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <div className="w-full">
                <button
                  onClick={() => handleSelectMenuIcem("casino")}
                  className=" w-full py-2 flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <MdOutlineCasino className="text-white w-4 h-4" />
                    <span className="text-sm font-medium text-white">
                      Casino
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={cn(
                      "text-white w-4 h-4 transition-all",
                      `${seletecdMenuItem == "casino" && "rotate-180"}`
                    )}
                  />
                </button>

                {seletecdMenuItem == "casino" && (
                  <ul className="px-2 list-decimal">
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        SLOT
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        POCKET
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Routel Wheel
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Crash
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <div className="w-full">
                <button
                  onClick={() => handleSelectMenuIcem("esports")}
                  className=" w-full py-2 flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <MdSportsEsports className="text-white w-4 h-4" />
                    <span className="text-sm font-medium text-white">
                      Esports
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={cn(
                      "text-white w-4 h-4 transition-all",
                      `${seletecdMenuItem == "esports" && "rotate-180"}`
                    )}
                  />
                </button>

                {seletecdMenuItem == "esports" && (
                  <ul className="px-2">
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Live
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-muted text-xs hover:text-white block py-1"
                      >
                        Pre Match
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </nav>
            <AuthButtons />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menusm;
