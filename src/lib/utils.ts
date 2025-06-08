import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const nDArrayMaker = <T>(array: Array<any>, n: number) => {
  const nDArray: T[][] = [];
  while (array.length !== 0) {
    const oneDArray = array.splice(0, n);
    nDArray.push(oneDArray);
  }

  return nDArray;
};

export function generateCode(length: number = 6): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }
  return code;
}

export const getTailwindBreakpoint = () => {
  const width = window.innerWidth;

  if (width < 640) return "sm"; // <640px
  if (width < 768) return "md"; // 640px - 767px
  if (width < 1024) return "lg"; // 768px - 1023px
  if (width < 1280) return "xl"; // 1024px - 1279px
  if (width < 1536) return "2xl"; // 1280px - 1535px
  return "3xl+"; // 1536px and above (if you added custom breakpoints)
};
