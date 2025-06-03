"use client";
import SecondaryButton from "@/components/buttons/secondary-button";
import { useUpdatePageNavigation } from "@/store/useStore";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
const ProfileUpdateButton = () => {
  const setPage = useUpdatePageNavigation((state) => state.setPage);
  return (
    <div className="px-2">
      <SecondaryButton
        onClick={() => setPage("update")}
        className="flex items-center gap-2 justify-center md:hidden my-2 w-full "
      >
        <FaPencilAlt className="w-4 h-4 text-white" />
        Edit Personal info
      </SecondaryButton>
    </div>
  );
};

export default ProfileUpdateButton;
