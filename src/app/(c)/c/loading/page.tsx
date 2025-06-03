/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { logInCasino } from "@/action/loginCasino";
import SitePreLoader from "@/components/loaders/SitePreLoader";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [error, setError] = useState<any>(null);

  const search = useSearchParams();

  const gameName = search.get("gameName");
  const gameType = search.get("gameType");

  useEffect(() => {
    if (gameName && gameType) {
      logInCasino({ gameType, gameName }).then((res) => {
        if (res.success) {
          redirect(res.url!);
        } else if (res.error) {
          setError(res.error);
        }
      });
    }
  }, [gameName, gameType]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <SitePreLoader />
    </div>
  );
};

export default Loading;
