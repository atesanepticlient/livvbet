import { create } from "zustand";
import { PaymentMethod } from "./types";

export const useUpdatePageNavigation = create<{
  page: string;
  setPage: (page: string) => void;
}>((set) => ({
  page: "",
  setPage: (page) => set((state) => ({ ...state, page })),
}));

export const usePaymentMethods = create<{
  allMethods: PaymentMethod[];
  methods: PaymentMethod[];
  currentMethod: string;
  setAllMethods: (methods: PaymentMethod[]) => void;
  setMethod: (methodName: string) => void;
}>((set) => ({
  allMethods: [],
  methods: [],
  currentMethod: "",
  setAllMethods: (methods) =>
    set((state) => ({
      ...state,
      allMethods: methods,
      currentMethod: "all methods",
    })),
  setMethod: (methodName) =>
    set((state) => {
      if (methodName == "all methods") {
        return { ...state, methods: [], currentMethod: methodName };
      }
      const method = state.allMethods.find((m) => m.methodName == methodName);

      return { ...state, currentMethod: methodName, methods: [method!] };
    }),
}));

