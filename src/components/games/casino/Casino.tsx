"use client";
// import Link from "next/link";
// import React from "react";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { MdCasino } from "react-icons/md";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

// import GameCard from "@/components/games/GameCard";
// import { useFetchGamesListQuery } from "@/lib/features/gamesApiSlice";
// import { Game } from "@/provider/type";
// import { FadeLoader } from "react-spinners";

const Casino = () => {
  // const { data, isLoading } = useFetchGamesListQuery();
  // const payload = data?.payload;

  return (
    // <>
    //   {(!data ||
    //     isLoading) && (
    //       <div className="w-full my-4">
    //         <FadeLoader color="#fff" className="w-8 h-8 mx-auto" />
    //       </div>
    //     )}
    //   {data && !isLoading && (
    //     <>
    //       <CasinoGameSlider
    //         gameList={[...payload!.games.slice(0, 20)]}
    //         gameType="Casino"
    //         allGamesRedirect="/casino"
    //       />
    //     </>
    //   )}
    // </>

    <div></div>
  );
};

// export const CasinoGameSlider = ({
//   gameList,
//   gameType,
//   allGamesRedirect,
// }: {
//   gameType: string;
//   gameList: Game[];
//   allGamesRedirect: string;
// }) => {
//   return (
//     <div className="">
//       <div className="flex items-center justify-between bg-[#214061] p-2 md:px-3 ">
//         <div className="flex gap-1 items-center">
//           <MdCasino className="w-4 h-5 md:w-4 md:h-5 text-white" />
//           <h4 className="font-semibold md:font-bold text-xs md:text-sm text-white uppercase">
//             {gameType}
//           </h4>
//         </div>
//         <Link
//           href={allGamesRedirect}
//           className="text-sm md:text-base text-white flex items-center gap-1"
//         >
//           <MdKeyboardDoubleArrowRight className="w-4 h-4 md:w-5 md:h-5" />
//         </Link>
//       </div>

//       <div className="p-4">
//         <Swiper
//           slidesPerView={"auto"}
//           spaceBetween={5}
//           className="mySwiper"
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}
//         >
//           {gameList.map((game, i) => (
//             <SwiperSlide className="max-w-[50%] md:max-w-[20%] pb-8" key={i}>
//               <GameCard
//                 gameType={game.GameType}
//                 image={game.ImageUrl}
//                 label={game.GameNameDisplay}
//                 gameName={game.GameName}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

export default Casino;
