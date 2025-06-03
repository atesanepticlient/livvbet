import Link from "next/link";
import React from "react";

const SiteContentTitle = ({ title }: { title: string }) => {
  return (
    <h4 className="text-sm md:text-balance font-medium text-white uppercase relative">
      {title}{" "}
      <div className="absolute left-0 -bottom-2 w-5 h-1 bg-[#FFCE00]"></div>
    </h4>
  );
};

const SiteContent = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 mt-6 md:mt-8   px-5 md:px-8 py-6 md:py-8 shadow-sm">
      <div>
        <SiteContentTitle title="Betting" />

        <ul className="flex flex-col mt-4 md:mt-6">
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Affiliate Program
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              B2B
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Become an agent
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Bet slip check
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Mobile version
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <SiteContentTitle title="1XBET" />

        <ul className="flex flex-col mt-4 md:mt-6">
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Affiliate Program
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              B2B
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Become an agent
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Bet slip check
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Mobile version
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <SiteContentTitle title="Games" />

        <ul className="flex flex-col mt-4 md:mt-6">
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Affiliate Program
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              B2B
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Become an agent
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Bet slip check
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Mobile version
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <SiteContentTitle title="Statistics" />

        <ul className="flex flex-col mt-4 md:mt-6">
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Affiliate Program
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              B2B
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Become an agent
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Bet slip check
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Mobile version
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#d3e0f0] text-xs md:text-sm content-link font-normal"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SiteContent;
