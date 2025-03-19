/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GameCardProps {
  label: string;
  gameName: string;
  image: any;
  gameType: string;
}

const GameCard = ({ label, image, gameName, gameType }: GameCardProps) => {
  return (
    <Link
      href={`/casino/loading?gameName=${gameName}&gameType=${gameType}`}
      className="shadow-sm block  overflow-hidden border border-[#214061]"
    >
      <Image
        src={image}
        alt={label}
        width={180}
        height={100}
        unoptimized
        className="w-full aspect-video"
      />
      <span className="text-xs md:text-sm text-white game-label-gradient px-2 text-center !line-clamp-1 py-1">
        {label}
      </span>
    </Link>
  );
};

export default GameCard;
