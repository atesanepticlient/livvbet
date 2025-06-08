import Header from "@/components/landing/headers/Header";
import React from "react";
import TabBar from "@/components/landing/TabBar";
import { IoIosSearch } from "react-icons/io";
import SportsCategories from "@/components/sports/SportsCategory";
import {
  CricketOddsCardProps,
  FootballOddsCardProps,
} from "@/components/types";
import CricketEventsSports from "@/components/sports/CricketEventsSports";
import FootballEventsSports from "@/components/sports/FootballEventSports";

interface CricketEvents {
  eventName: string; //EX :ICC world cup
  matchData: CricketOddsCardProps[];
}

const cricketEvents: CricketEvents[] = [
  {
    eventName: "ICC World Cup",
    matchData: [
      {
        data: {
          eventName: "India vs Australia",
          format: "ODI",
          teams: {
            team1: { name: "India", flag: "https://flagcdn.com/w320/in.png" },
            team2: {
              name: "Australia",
              flag: "https://flagcdn.com/w320/au.png",
            },
          },
          score: {
            team1: "280/7 (50)",
            team2: "275/9 (50)",
          },
          odds: {
            team1: 1.9,
            team2: 2.1,
            draw: 4.5,
          },
          redirectPath: "/cricket/icc-worldcup-ind-vs-aus",
        },
      },
      {
        data: {
          eventName: "England vs Pakistan",
          format: "ODI",
          teams: {
            team1: {
              name: "England",
              flag: "https://flagcdn.com/w320/gb-eng.png",
            },
            team2: {
              name: "Pakistan",
              flag: "https://flagcdn.com/w320/pk.png",
            },
          },
          score: {
            team1: "260/9 (50)",
            team2: "255/8 (50)",
          },
          odds: {
            team1: 2.0,
            team2: 2.3,
            draw: 5.0,
          },
          redirectPath: "/cricket/icc-worldcup-eng-vs-pak",
        },
      },
      {
        data: {
          eventName: "South Africa vs New Zealand",
          format: "ODI",
          teams: {
            team1: {
              name: "South Africa",
              flag: "https://flagcdn.com/w320/za.png",
            },
            team2: {
              name: "New Zealand",
              flag: "https://flagcdn.com/w320/nz.png",
            },
          },
          score: {
            team1: "310/5 (50)",
            team2: "290/7 (50)",
          },
          odds: {
            team1: 1.8,
            team2: 2.4,
            draw: 4.8,
          },
          redirectPath: "/cricket/icc-worldcup-sa-vs-nz",
        },
      },
      {
        data: {
          eventName: "Sri Lanka vs Bangladesh",
          format: "ODI",
          teams: {
            team1: {
              name: "Sri Lanka",
              flag: "https://flagcdn.com/w320/lk.png",
            },
            team2: {
              name: "Bangladesh",
              flag: "https://flagcdn.com/w320/bd.png",
            },
          },
          score: {
            team1: "240/10 (48)",
            team2: "245/6 (49)",
          },
          odds: {
            team1: 2.2,
            team2: 1.9,
            draw: 5.5,
          },
          redirectPath: "/cricket/icc-worldcup-sl-vs-bd",
        },
      },
    ],
  },
  {
    eventName: "The Ashes",
    matchData: [
      {
        data: {
          eventName: "England vs Australia - 1st Test",
          format: "Test",
          teams: {
            team1: {
              name: "England",
              flag: "https://flagcdn.com/w320/gb-eng.png",
            },
            team2: {
              name: "Australia",
              flag: "https://flagcdn.com/w320/au.png",
            },
          },
          score: {
            team1: "320 & 210",
            team2: "290 & 250",
          },
          odds: {
            team1: 2.5,
            team2: 2.3,
            draw: 3.0,
          },
          redirectPath: "/cricket/ashes-1st-test",
        },
      },
      {
        data: {
          eventName: "England vs Australia - 2nd Test",
          format: "Test",
          teams: {
            team1: {
              name: "England",
              flag: "https://flagcdn.com/w320/gb-eng.png",
            },
            team2: {
              name: "Australia",
              flag: "https://flagcdn.com/w320/au.png",
            },
          },
          score: {
            team1: "350 & 280",
            team2: "340 & 275",
          },
          odds: {
            team1: 2.2,
            team2: 2.4,
            draw: 3.5,
          },
          redirectPath: "/cricket/ashes-2nd-test",
        },
      },
      {
        data: {
          eventName: "England vs Australia - 3rd Test",
          format: "Test",
          teams: {
            team1: {
              name: "England",
              flag: "https://flagcdn.com/w320/gb-eng.png",
            },
            team2: {
              name: "Australia",
              flag: "https://flagcdn.com/w320/au.png",
            },
          },
          score: {
            team1: "280 & 230",
            team2: "290 & 210",
          },
          odds: {
            team1: 2.1,
            team2: 2.5,
            draw: 3.8,
          },
          redirectPath: "/cricket/ashes-3rd-test",
        },
      },
      {
        data: {
          eventName: "England vs Australia - 4th Test",
          format: "Test",
          teams: {
            team1: {
              name: "England",
              flag: "https://flagcdn.com/w320/gb-eng.png",
            },
            team2: {
              name: "Australia",
              flag: "https://flagcdn.com/w320/au.png",
            },
          },
          score: {
            team1: "330 & 250",
            team2: "320 & 270",
          },
          odds: {
            team1: 2.0,
            team2: 2.6,
            draw: 3.9,
          },
          redirectPath: "/cricket/ashes-4th-test",
        },
      },
    ],
  },
  {
    eventName: "Asia Cup",
    matchData: [
      {
        data: {
          eventName: "India vs Pakistan",
          format: "T20",
          teams: {
            team1: { name: "India", flag: "https://flagcdn.com/w320/in.png" },
            team2: {
              name: "Pakistan",
              flag: "https://flagcdn.com/w320/pk.png",
            },
          },
          score: {
            team1: "180/6 (20)",
            team2: "175/7 (20)",
          },
          odds: {
            team1: 1.7,
            team2: 2.2,
            draw: 6.0,
          },
          redirectPath: "/cricket/asia-cup-ind-vs-pak",
        },
      },
      {
        data: {
          eventName: "Bangladesh vs Sri Lanka",
          format: "T20",
          teams: {
            team1: {
              name: "Bangladesh",
              flag: "https://flagcdn.com/w320/bd.png",
            },
            team2: {
              name: "Sri Lanka",
              flag: "https://flagcdn.com/w320/lk.png",
            },
          },
          score: {
            team1: "170/8 (20)",
            team2: "168/9 (20)",
          },
          odds: {
            team1: 1.9,
            team2: 2.3,
            draw: 5.8,
          },
          redirectPath: "/cricket/asia-cup-bd-vs-sl",
        },
      },
      {
        data: {
          eventName: "Afghanistan vs India",
          format: "T20",
          teams: {
            team1: {
              name: "Afghanistan",
              flag: "https://flagcdn.com/w320/af.png",
            },
            team2: { name: "India", flag: "https://flagcdn.com/w320/in.png" },
          },
          score: {
            team1: "150/7 (20)",
            team2: "155/5 (19)",
          },
          odds: {
            team1: 2.5,
            team2: 1.6,
            draw: 7.2,
          },
          redirectPath: "/cricket/asia-cup-afg-vs-ind",
        },
      },
      {
        data: {
          eventName: "Pakistan vs Sri Lanka",
          format: "T20",
          teams: {
            team1: {
              name: "Pakistan",
              flag: "https://flagcdn.com/w320/pk.png",
            },
            team2: {
              name: "Sri Lanka",
              flag: "https://flagcdn.com/w320/lk.png",
            },
          },
          score: {
            team1: "190/6 (20)",
            team2: "185/8 (20)",
          },
          odds: {
            team1: 1.8,
            team2: 2.4,
            draw: 5.9,
          },
          redirectPath: "/cricket/asia-cup-pak-vs-sl",
        },
      },
    ],
  },
];

interface FootballEvents {
  eventName: string; //EX: UEFA Champions League
  matchData: FootballOddsCardProps[];
}
const footballEvents: FootballEvents[] = [
  {
    eventName: "UEFA Champions League",
    matchData: [
      {
        data: {
          eventName: "UEFA Champions League",
          time: "20:00",
          teams: {
            team1: {
              name: "Real Madrid",
              flag: "https://flagsapi.com/ES/flat/64.png",
            },
            team2: {
              name: "Manchester City",
              flag: "https://flagsapi.com/GB/flat/64.png",
            },
          },
          score: { team1: "1", team2: "2" },
          odds: { team1: 2.1, team2: 1.8, draw: 3.0 },
          redirectPath: "/match/real-madrid-vs-man-city",
        },
      },
      {
        data: {
          eventName: "UEFA Champions League",
          time: "22:00",
          teams: {
            team1: {
              name: "Bayern Munich",
              flag: "https://flagsapi.com/DE/flat/64.png",
            },
            team2: { name: "PSG", flag: "https://flagsapi.com/FR/flat/64.png" },
          },
          score: { team1: "2", team2: "2" },
          odds: { team1: 2.5, team2: 2.0, draw: 3.5 },
          redirectPath: "/match/bayern-vs-psg",
        },
      },
    ],
  },
  {
    eventName: "English Premier League",
    matchData: [
      {
        data: {
          eventName: "English Premier League",
          time: "18:30",
          teams: {
            team1: {
              name: "Arsenal",
              flag: "https://flagsapi.com/GB/flat/64.png",
            },
            team2: {
              name: "Manchester United",
              flag: "https://flagsapi.com/GB/flat/64.png",
            },
          },
          score: { team1: "2", team2: "2" },
          odds: { team1: 2.2, team2: 2.4, draw: 3.0 },
          redirectPath: "/match/arsenal-vs-man-united",
        },
      },
    ],
  },
];

const SportsPage = () => {
  return (
    <div className="bg-[#0B2B44] min-h-screen pb-24 md:pb-32">
      <Header />
      <main className="container">
        <div className="flex items-center justify-between px-2 py-2 ">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-brand-foreground"></div>
            <span className="text-xs md:text-sm text-white">LIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 cursor-pointer">
              <IoIosSearch className="text-white w-4 h-4 md:w-5 md:h-5 " />
            </button>
          </div>
        </div>

        <SportsCategories />

        <div>
          {cricketEvents.map((e, i) => (
            <CricketEventsSports
              eventName={e.eventName}
              matchData={e.matchData}
              makeFavorit={() => console.log("Make fav called")}
              nextAction={() => console.log("Next action called")}
              key={i}
            />
          ))}
        </div>

        <div>
          {footballEvents.map((e, i) => (
            <FootballEventsSports
              eventName={e.eventName}
              matchData={e.matchData}
              makeFavorit={() => console.log("Make fav called")}
              nextAction={() => console.log("Next action called")}
              key={i}
            />
          ))}
        </div>
      </main>
      <TabBar />
    </div>
  );
};

export default SportsPage;
