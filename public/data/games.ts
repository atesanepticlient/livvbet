import mg from "../assets/providers/MG-BLACK.png";
import aviator from "../assets/providers/Aviator_mono.svg";
import evolution from "../assets/providers/Evolution_mono.svg";
import jili from "../assets/providers/JILImono.svg";
import netent from "../assets/providers/Netentmono.svg";
import pg from "../assets/providers/PG_Soft_mono.svg";
import playgomono from "../assets/providers/PlaynGomono.svg";
import red from "../assets/providers/Red_Tiger_mono.svg";
import { Categories, Title } from "@/types/game";

export const providers = [
  {
    image: mg,
    slug: Title.Microgaming,
    name: "Micro Gaming",
  },
  {
    image: aviator,
    slug: Title.FastGames,
    name: "Aviator",
  },
  {
    image: pg,
    slug: Title.Pgsoft,
    name: "PG Soft",
  },
  {
    image: evolution,
    slug: Title.Evolution,
    name: "Evolution",
  },

  {
    image: jili,
    slug: Title.Jili,
    name: "Jili",
  },
  {
    image: netent,
    slug: Title.NetEnt,
    name: "Netent",
  },
  {
    image: playgomono,
    slug: Title.Playngo,
    name: "Playn go",
  },
  {
    image: red,
    slug: Title.RedTiger,
    name: "Red Tiger",
  },
];

export const categories = [
  {
    slug: "all",
    name: "All",
  },
  {
    slug: "popular",
    name: "Popular",
  },
  {
    slug: Categories.Slots,
    name: "Slots",
  },
  {
    slug: "new",
    name: "New",
  },
  {
    slug: "best_in_bangladesh",
    name: "Best In Bangladesh",
  },
];
