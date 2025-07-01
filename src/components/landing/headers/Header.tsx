"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/../public/assets/svg/livvbet-dark-logo.svg";

import { FaGift } from "react-icons/fa";

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
import { TooltipProvider } from "@/components/ui/tooltip";
import AuthButtons from "@/components/auth/AuthButtons";
import Menusm from "./MenuLeft";
import PrimaryButton from "@/components/buttons/primary-button";
import SecondaryButton from "@/components/buttons/secondary-button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Balance from "./balance";
import Inbox from "./inbox";
import User from "./user";
import Logout from "./logout";
import LogoutModal from "@/components/LogoutModal";

import Contact from "./contact";
// import Balance from "./balance";
// import Inbox from "./inbox";
// import User from "./user";
// import Logout from "./logout";

const Header = () => {
  const user = useCurrentUser();

  return (
    <header className="w-full  z-[1000] sticky top-0 left-0  flex flex-col items-center justify-between ">
      <TooltipProvider>
        <div className="w-full bg-[#212121] px-5 md:px-7 lg:px-8 py-4 hidden md:flex items-center justify-between ">
          <div className="flex items-center gap-4 md:gap-5 lg:gap-7  ">
            <Tooltip>
              <TooltipTrigger>
                <Link href="/invite-friend">
                  <button className="bg-[#4F4F4F] hover:bg-[#474747] cursor-pointer text-white p-1 rounded-md text-sm flex items-center gap-2 font-medium">
                    <FaGift className="w-4 h-4" /> 12000BDT
                  </button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Bonus</p>
              </TooltipContent>
            </Tooltip>

            <Contact />
          </div>

          <div className="flex items-center gap-2">
            {user && (
              <>
                <Balance />
                <Inbox />
                <User />
                <LogoutModal>
                  <Logout />
                </LogoutModal>
              </>
            )}

            {!user && (
              <AuthModal
                trigger={
                  <PrimaryButton className="!py-1 !font-medium">
                    Registration
                  </PrimaryButton>
                }
              >
                <Registation />
              </AuthModal>
            )}
            {!user && (
              <AuthModal
                trigger={
                  <SecondaryButton className="!py-1 !font-medium">
                    Login
                  </SecondaryButton>
                }
              >
                <Login />
              </AuthModal>
            )}
          </div>
        </div>
      </TooltipProvider>

      <div className="w-full bg-[#212121] border-t-[2px] border-t-[#4f4f4f36] px-5 md:px-7 lg:px-8 py-4 flex items-center justify-between md:py-2 px-2 md:px-4 ">
        <div className="relative">
          <Link href="/">
            <Image
              src={logo}
              alt="LivvBet"
              className="w-[100px] md:w-[120px] lg:w-[140px] "
            />
          </Link>
        </div>

        <nav className="hidden md:block py-1 bg-[#FFCE00]">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                Top-Events <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/sports">EPL</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports">LaLiga</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports">IPL</Link>
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

            <Link className="text-black/75 hover:text-black" href="/live">
              Live
            </Link>

            <MenubarMenu>
              <MenubarTrigger>
                SPORTS <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/sports">Cricket</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports">Soccer</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            {/* 
            <MenubarMenu>
              <MenubarItem><Link href="/live">Live</Link></MenubarItem>
            </MenubarMenu> */}
            <MenubarMenu>
              <MenubarTrigger>
                Casino <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/casino/slots">SLOT</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/casino/popular">POPULAR</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>
                Esports <IoMdArrowDropdown className={cn("w-4 h-4 ")} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href="/sports">Live</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/sports">Pre Match</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </nav>

        <div className="flex md:hidden items-center gap-1 pr-2 py-2 md:py-3">
          <div className="">
            <AuthButtons />
          </div>
          {user && (
            <div className="flex items-center gap-2">
              <Balance />
              {/* <PrimaryButton>
                <Link
                  href="/account/deposit"
                  className="flex items-center gap-1"
                >
                  Deposit
                </Link>
              </PrimaryButton> */}
              <Menusm>
                <FaUser className="w-4 h-4 !text-white" />
              </Menusm>
            </div>
          )}

          <AppSidebar>
            <BiMenuAltRight className="w-5 h-5 ml-2 !text-white" />
          </AppSidebar>
        </div>
      </div>
    </header>
  );
};

export default Header;
