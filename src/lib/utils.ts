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
