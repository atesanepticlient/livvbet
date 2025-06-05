"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navs = [
  {
    label: "Casino",
    link: "/casino",
    isActive: false,
  },
  {
    label: "Live Casino",
    link: "/live",
    isActive: false,
  },
  {
    label: "Aviator",
    link: `/play?gameId=${8890}`,
    isActive: false,
  },
  {
    label: "Jetx",
    link: `/play?gameId=${8891}`,
    isActive: false,
  },
];

const Nav = () => {
  const [navData, setNavData] = useState(navs);

  const pathname = usePathname();

  const selectedPath = `/${pathname.split("/")[1]}`;
  useEffect(() => {
    setNavData((state) => {
      const newSate = state.map((nav) => {
        if (nav.link == selectedPath) {
          nav.isActive = true;
        } else {
          nav.isActive = false;
        }
        return nav;
      });

      return newSate;
    });
  }, [selectedPath]);

  return (
    <nav className="flex items-center gap-3 md:gap-4 px-2 md:px-0 py-3 lg:pt-4">
      {navData.map((nav, i) => (
        <Link
          href={nav.link}
          key={i}
          className={`${
            nav.isActive
              ? "text-[#FFB805]"
              : "text-white hover:text-[#FFB805] transition-colors"
          } text-base lg:text-lg uppercase font-medium tracking-wide`}
        >
          {nav.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
