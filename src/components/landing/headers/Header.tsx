"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/../public/assets/svg/logo.svg";
import { Button } from "@/components/ui/button";

import { LogIn, SquarePen } from "lucide-react";
import { BsQrCode } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { IoMdPhonePortrait, IoMdSettings } from "react-icons/io";

import { FaTelegram } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { AppSidebar } from "./Menu";
import { cn } from "@/lib/utils";
import AuthModal from "@/components/auth/AuthModal";
import Login from "@/components/auth/Login";
import Registation from "@/components/auth/Registation";
import useCurrentUser from "@/hook/useCurrentUser";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import QrModal from "../QrModal";
import AuthButtons from "@/components/auth/AuthButtons";

const Header = () => {
  const user = useCurrentUser();
  return (
    <header className="w-full  z-[1000] sticky top-0 left-0  flex flex-col items-center justify-between ">
      <TooltipProvider>
        <div className="w-full bg-white hidden md:flex items-center justify-between border-b border-b-border">
          <div className="flex items-center ">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"primary"}
                  className="border-l border-b border-white "
                >
                  <RiComputerLine className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span className="text-base font-medium text-white uppercase">
                  1xbet Betting app
                </span>
                <p className="mt-1 text-xs text-muted">
                  This app will make pre-match and in-play betting faster and
                  save mobile data.
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"primary"}
                  className="border-l border-b border-white "
                >
                  <IoMdPhonePortrait className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span className="text-base font-medium text-white uppercase">
                  Mobile App
                </span>
                <p className="mt-1 text-xs text-muted">
                  The 1xbet app makes betting easier
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"primary"}
                  className="md:border-l border-b border-white"
                >
                  <FaTelegram className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span className="text-base font-medium text-white uppercase">
                  Telegram
                </span>
                <p className="mt-1 text-xs text-muted">Bet On Telegram</p>
              </TooltipContent>
            </Tooltip>

            <Button
              variant={"primary"}
              className="border-l border-b border-white"
            >
              $
            </Button>
            <Button
              variant={"secondary"}
              className="border-l border-b border-white flex flex-col items-center"
            >
              <span className="text-sm md:text-base font-bold text-white -translate-y-2">
                {user ? user.wallet?.balance.toString() : 0}
              </span>
              <span className="text-[10px] md:text-xs text-white font-bold uppercase -translate-y-6 md:-translate-y-5">
                Main
              </span>
            </Button>
          </div>
          <div className="flex items-center ">
            <QrModal>
              <Button
                variant={"primary"}
                className="border-l border-b border-white "
              >
                <BsQrCode className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </Button>
            </QrModal>

            {!user && (
              <AuthModal
                trigger={
                  <Button
                    variant={"primary"}
                    className="border-l border-b border-white"
                  >
                    <LogIn className="w-4 h-4 md:w-5 md:h-5" />
                    Login
                  </Button>
                }
              >
                <Login />
              </AuthModal>
            )}

            {!user && (
              <AuthModal
                trigger={
                  <Button
                    variant={"secondary"}
                    className="border-l border-b border-white"
                  >
                    <SquarePen className="w-4 h-4 md:w-5 md:h-5" />
                    Registration
                  </Button>
                }
              >
                <Registation />
              </AuthModal>
            )}

            {user && (
              <Button variant={"secondary"} className="border-l border-b">
                $ Deposit
              </Button>
            )}

            {user && (
              <Button
                variant={"primary"}
                className="inner-shadow bg-[#0e5d9a] border-l border-b"
              >
                <FaUser className="w-4 h-4 " /> My Account
              </Button>
            )}

            <Button
              variant={"primary"}
              className="border-l border-b border-white"
            >
              <IoMdSettings className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </TooltipProvider>

      <div className="w-full bg-gradient-to-b from-white to-[#dbe5ed] flex items-center justify-between md:py-2 px-2 md:px-4 border-b border-b-white">
        <div className="relative">
          <Link href="/">
            <Image
              src={logo}
              alt="1XBet Companl"
              className="w-[80px] md:w-[100px] "
            />
          </Link>

          <span className="absolute top-0 -right-16 text-[10px] text-white bg-brand-foreground rounded-sm block w-max text-center px-1 uppercase">
            Company
          </span>
        </div>

        <nav className="hidden md:block ">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                Top-Events <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/sports/loadin">EPL</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports/loadin">LaLiga</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports/loadin">IPL</Link>
                </MenubarItem>
                <MenubarSeparator />
                {/* <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub> */}

                {/* <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem> */}
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                Spotrs <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/sports/loadin">Cricket</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports/loadin">Soccer</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                Live <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/sports/loadin">Bet On Your Nation</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports/loadin">Multi-Live</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                Casino <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/sports/casino/Slots">SLOT</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports/casino">POCKET</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports/casino">Routel Wheel</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports/casino">Crash</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>
                Esports <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/sports/casino">Live</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports/casino">Pre Match</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </nav>

        <div className="flex md:hidden items-center gap-2 pr-2 py-3">
          <div className="">
            <AuthButtons />
          </div>
          {user && (
            <div className="flex items-center gap-2">
              <Button className="bg-brand-foreground rounded-sm hover:bg-brand-foreground/90 text-white">
                <Link href="/account/deposit">Deposit</Link>
              </Button>
              <Link href={"/account/profile"}>
                <FaUser className="w-4 h-4 text-accent" />
              </Link>
            </div>
          )}

          <AppSidebar>
            <BiMenuAltRight className="w-6 h-6 ml-2 text-accent" />
          </AppSidebar>
        </div>
      </div>
    </header>
  );
};

export default Header;
