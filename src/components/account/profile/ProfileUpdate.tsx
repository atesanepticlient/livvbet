"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import ProfileMenuContextWapper from "./ProfileMenuContextWapper";
import { FaPencilAlt } from "react-icons/fa";
import { useUpdatePageNavigation } from "@/store/useStore";

import { MdKeyboardArrowDown } from "react-icons/md";
import useCurrentUser from "@/hook/useCurrentUser";
import { countryNameFinder } from "@/lib/helpers";
import SecondaryButton from "@/components/buttons/secondary-button";

const ProfileUpdate = () => {
  const { setPage } = useUpdatePageNavigation((state) => state);
  const user = useCurrentUser();
  return (
    <div className="bg-[#fff] py-2 px-3">
      <div className="border border-[#9a9a9a49] flex items-center mb-2">
        <Input
          readOnly
          placeholder="******"
          className="placeholder:text-[#9a9a9a49] flex-1 border-none"
        />
        <ProfileMenuContextWapper type="password">
          <button className="p-2 bg-[#212121]">
            <FaPencilAlt className="text-white w-4 h-4" />
          </button>
        </ProfileMenuContextWapper>
      </div>

      <div className="border border-[#9a9a9a49] flex items-center mb-2">
        <Input
          readOnly
          placeholder="User name"
          className="placeholder:text-[#9a9a9a49] flex-1 border-none"
        />
        <ProfileMenuContextWapper type="name">
          <button className="p-2 bg-[#212121]">
            <FaPencilAlt className="text-white w-4 h-4" />
          </button>
        </ProfileMenuContextWapper>
      </div>

      <div className="border border-[#9a9a9a49] flex items-center mb-2">
        <Input
          readOnly
          placeholder="Phone number"
          className="placeholder:text-[#9a9a9a49] flex-1 border-none"
        />
        <ProfileMenuContextWapper type="name">
          <button className="p-2 bg-[#212121]">
            <FaPencilAlt className="text-white w-4 h-4" />
          </button>
        </ProfileMenuContextWapper>
      </div>

      <div className="border border-[#9a9a9a49] flex items-center mb-2">
        <Input
          readOnly
          placeholder={countryNameFinder(user!.wallet!.currencyCode)}
          className="placeholder:text-[#9a9a9a49] flex-1 border-none"
        />
        <MdKeyboardArrowDown className="w-6 h-6 text-[#9a9a9a49] pr-2" />
      </div>

      <div className="border border-[#9a9a9a49] flex items-center mb-2">
        <Input
          readOnly
          placeholder={user!.wallet!.currencyCode}
          className="placeholder:text-[#9a9a9a49] flex-1 border-none"
        />
        <MdKeyboardArrowDown className="w-6 h-6 text-[#9a9a9a49] pr-2" />
      </div>

      <SecondaryButton
        className=" w-full "
        onClick={() => setPage("")}
      >
        Cancel
      </SecondaryButton>
    </div>
  );
};

export default ProfileUpdate;
