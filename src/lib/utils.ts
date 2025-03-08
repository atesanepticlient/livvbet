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

