/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { loginSportBook } from "@/action/loginSportBook";
import SitePreLoader from "@/components/loaders/SitePreLoader";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    loginSportBook().then((res) => {
      if (res.success) {
        redirect(res.url!);
      } else if (res.error) {
        setError(res.error);
      }
    });
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SitePreLoader />
    </div>
  );
};

export default Loading;
