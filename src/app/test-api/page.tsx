"use client";
import { createUser } from "@/action/createUser";
import { Button } from "@/components/ui/button";

import React, { useTransition } from "react";

const Test = () => {
  const [pending, startTransition] = useTransition();
  const handleTest = () => {
    startTransition(async () => {
      await createUser();
      alert("Created ");
    });
  };
  return (
    <div className="flex justify-center items-center w-full h-full bg-secondary-foreground">
      <Button disabled={pending} onClick={handleTest}>
        {pending ? "Testing." : "Test Api"}
      </Button>
    </div>
  );
};

export default Test;
