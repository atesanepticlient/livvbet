"use client";
import { Button } from "@/components/ui/button";
import { useUpdatePageNavigation } from "@/store/useStore";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
const ProfileUpdateButton = () => {
  const setPage = useUpdatePageNavigation((state) => state.setPage);
  return (
    <div className="px-2">
      <Button
        onClick={() => setPage("update")}
        className="bg-primary hover:bg-primary/70 md:hidden my-2 w-full text-white"
      >
        <FaPencilAlt className="w-4 h-4 text-white" />
        edit personal info
      </Button>
    </div>
  );
};

export default ProfileUpdateButton;
