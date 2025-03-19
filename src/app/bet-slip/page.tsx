import React from "react";
import Header from "@/components/landing/headers/Header";
import TabBar from "@/components/landing/TabBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BetSlip from "@/components/bet/BetSlip";
import Mybets from "@/components/bet/Mybets";

const BetSlipPage = () => {
  return (
    <div className="bg-[#0f324f] min-h-screen pb-24 md:pb-32">
      <Header />
      <main className="container">
        <div className="px-2 py-2">
          <Tabs defaultValue="slip">
            <TabsList>
              <TabsTrigger value="slip" className="rounded-sm">
                Bet Slip
              </TabsTrigger>
              <TabsTrigger value="my" className="rounded-sm">
                My Bets
              </TabsTrigger>
            </TabsList>
            <TabsContent value="slip">
              <BetSlip />
            </TabsContent>
            <TabsContent value="my">
              <Mybets />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <TabBar />
    </div>
  );
};

export default BetSlipPage;
