import React from "react";
import Slider from "../slider";
import LiveGames from "./live-games";

const LiveCasino = () => {
  return (
    <div>
      <div className="min-h-screen">
        <main className=" ">
          <Slider
            sliders={[
              {
                image: "./assets/images/features/casino/memberonly.jpg",
                link: "#",
              },
              {
                image:
                  "./assets/images/features/casino/casino-vip-cashback.jpg",
                link: "#",
              },
            ]}
          />
          <div>
            <LiveGames />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LiveCasino;
