"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import ProfileMenuContextWapper from "./ProfileMenuContextWapper";
import { FaPencilAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useUpdatePageNavigation } from "@/store/useStore";

import { MdKeyboardArrowDown } from "react-icons/md";

const ProfileUpdate = () => {
  const setPage = useUpdatePageNavigation((state) => state.setPage);
  return (
    <div className="bg-[#213f61] py-2 px-3">
      <div className="border border-border flex items-center mb-2">
        <Input
          readOnly
          placeholder="******"
          className="placeholder:text-muted flex-1 border-none"
        />
        <ProfileMenuContextWapper type="password">
          <button className="p-2 bg-primary">
            <FaPencilAlt className="text-white w-4 h-4" />
          </button>
        </ProfileMenuContextWapper>
      </div>

      <div className="border border-border flex items-center mb-2">
        <Input
          readOnly
          placeholder="User name"
          className="placeholder:text-muted flex-1 border-none"
        />
        <ProfileMenuContextWapper type="name">
          <button className="p-2 bg-primary">
            <FaPencilAlt className="text-white w-4 h-4" />
          </button>
        </ProfileMenuContextWapper>
      </div>

      <div className="border border-border flex items-center mb-2">
        <Input
          readOnly
          placeholder="Phone number"
          className="placeholder:text-muted flex-1 border-none"
        />
        <ProfileMenuContextWapper type="name">
          <button className="p-2 bg-primary">
            <FaPencilAlt className="text-white w-4 h-4" />
          </button>
        </ProfileMenuContextWapper>
      </div>

      <div className="border border-white/50 bg-[#193a59] flex items-center mb-2">
        <Input
          readOnly
          placeholder="Country"
          className="placeholder:text-white/50 flex-1 border-none"
        />
        <MdKeyboardArrowDown className="w-6 h-6 text-white/50 pr-2" />
      </div>

      <Button
        className="bg-brand w-full text-white"
        onClick={() => setPage("")}
      >
        Cancel
      </Button>
    </div>
  );
};

export default ProfileUpdate;
