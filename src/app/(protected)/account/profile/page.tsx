"use client";
import ProfileInfo from "@/components/account/profile/ProfileInfo";
import ProfileUpdate from "@/components/account/profile/ProfileUpdate";
import ProfileUpdateButton from "@/components/account/profile/ProfileUpdateButton";

import PageHeader from "@/components/PageHeader";
import { useUpdatePageNavigation } from "@/store/useStore";
import React from "react";

const ProfilePage = () => {
  const page = useUpdatePageNavigation((state) => state.page);
  return (
    <div className=" ">
      {page !== "update" && (
        <main>
          <div>
            <PageHeader label="personal profile" />
            <ProfileInfo />
            <ProfileUpdateButton />
          </div>
        </main>
      )}

      {page == "update" && (
        <main>
          <div>
            <PageHeader label="personal profile" />
            <ProfileUpdate />
          </div>
        </main>
      )}
    </div>
  );
};

export default ProfilePage;
