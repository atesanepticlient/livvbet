"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const About = () => {
  const [isCollapse, setCollapse] = useState(false);
  return (
    <div className="my-2 md:my-3">
      <div
        onClick={() => setCollapse(!isCollapse)}
        className="w-full bg-secondary px-2 md:px-4 py-2 flex items-center justify-between cursor-pointer"
      >
        <span className="text-sm md:text-base text-white">
          More about gambling
        </span>

        <IoIosArrowDown
          className={cn(
            "w-4 h-4 md:w-5 md:h-5 text-white transition-all",
            `${isCollapse && "rotate-180"}`
          )}
        />
      </div>

      <div
        className={cn(
          " shadow-sm",
          `${isCollapse ? "h-auto" : "h-0 overflow-hidden"}`
        )}
      >
        <div className="p-4 md:p-6">
          <h4 className="text-white text-lg md:text-2xl font-semibold">
            1xBet Betting Company – Online Sports Betting
          </h4>

          <div className="my-3 md:my-4">
            <h5 className="text-white text-sm md:text-lg uppercase font-semibold mb-2 md:mb-3">
              🥇1XBET BETTING COMPANY — WHAT WOULD YOU LIKE TO KNOW?
            </h5>
            <p className="text-xs md:text-sm text-white">
              1xBet was founded in 2007 and in recent years has become one of
              the world&apos;s leading betting companies. This is proven by the
              succession of prestigious awards and prizes the company has won
              and been nominated for, namely at the SBC Awards, Global Gaming
              Awards, and International Gaming Awards. 1xBet Betting Company is
              an active sponsor of the top football tournaments – official
              presenting partner of Italy&apos;s Serie A, media partner of
              Spain&apos;s La Liga, and it is the official sponsor of a number
              of big international tournaments such as the Africa Cup of
              Nations. Since 2019, 1xBet has been the official betting partner
              of FC Barcelona. 1xBet is a company that works with only the best.
            </p>
          </div>

          <div className="my-3 md:my-4">
            <h5 className="text-white text-sm md:text-lg uppercase font-semibold mb-2 md:mb-3">
              💰HOW CAN YOU EARN MONEY WITH 1XBET? PREDICTIONS ON SPORTS EVENTS
            </h5>
            <p className="text-xs md:text-sm text-white">
              Every customer enjoys making predictions on matches played by
              their favorite team. By combining their own knowledge with
              reliable statistics, customers can turn their predictions into
              money. They can easily weigh up the probability of one outcome or
              another, make their predictions, and create a bet slip.
              What&apos;s more, the 1xBet website offers customers the chance to
              create a winning combination and share their bet slip with their
              friends. 1xBet Betting Company holds a Bet Slip Battle every
              month, giving players the opportunity to get an additional bonus.
            </p>
          </div>

          <div className="my-3 md:my-4">
            <h5 className="text-white text-sm md:text-lg uppercase font-semibold mb-2 md:mb-3">
              ⚽WHICH SPORTS AND EVENTS ARE OFFERED FOR BETTING BY 1XBET?
            </h5>
            <p className="text-xs md:text-sm text-white">
              Customers can place pre-match bets on a range of events: from the
              most popular sports to darts and trotting. The most popular bets
              to place are on football, UFC and esports – events that 1xBet has
              helped to develop for many years already. On a daily basis, fans
              all over the world can bet on 1000+ events from a selection of
              over 90 sports. As one of the biggest betting companies, 1xBet
              gives everyone a chance to earn money. With 1xBet, bettors can
              also place bets on events in show business, cinema, TV, economics,
              politics and other aspects of life that we talk about. So, if you
              keep up with &quot;What? Where? When?&quot;, know which film will
              get an Oscar this year, and you&apos;re confident about the
              weather forecast – 1xBet provides everyone with the chance to earn
              money.
            </p>
          </div>

          <div className="my-3 md:my-4">
            <h5 className="text-white text-sm md:text-lg uppercase font-semibold mb-2 md:mb-3">
              🏆WHAT DOES 1XBET BETTING COMPANY GUARANTEE?
            </h5>
            <ul>
              <li className="text-xs md:text-sm text-white">
                re-match bets on the most popular events with the best odds
              </li>
              <li className="text-xs md:text-sm text-white">
                The ability to watch the top sports events online
              </li>
              <li className="text-xs md:text-sm text-white">
                Reliability and solid performance when settling bets for
                customers
              </li>
              <li className="text-xs md:text-sm text-white">
                Guaranteed payment of all bets made within the terms and
                conditions
              </li>
              <li className="text-xs md:text-sm text-white">
                An individual approach to all customers
              </li>
            </ul>
          </div>

          <div className="my-3 md:my-4">
            <h5 className="text-white text-sm md:text-lg uppercase font-semibold mb-2 md:mb-3">
              🏆1XBET – EVERYTHING YOU NEED FOR VICTORY!
            </h5>
            <p className="text-xs md:text-sm text-white">
              Online sports bets and live bets are the most popular among 1xBet
              customers, but bettors in several countries can also bet offline
              in betting shops. 1xBet is a reliable bookmaker which awards its
              customers by offering fantastic bonuses and exciting promotions.
              If you&apos;re looking for a top bookmaker that you can trust,
              1xBet is the one for you. The time has come for new wins with
              1xBet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
