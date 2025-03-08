"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GameCardProps {
  label: string;
  redirect: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
}

const GameCard = ({ label, image, redirect }: GameCardProps) => {
  return (
    <Link
      href={redirect}
      className="shadow-sm block  overflow-hidden border border-blue-400/15"
    >
      <Image
        src={image}
        alt={label}
        className="w-full aspect-video"
        placeholder="blur"
      />
      <span className="text-xs md:text-sm text-white bg-gradient-to-b from-[#1a5684] via-[#24507d] to-[#103958] px-2 text-center !line-clamp-1 py-1">
        {label}
      </span>
    </Link>
  );
};

export default GameCard;
