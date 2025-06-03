import { create } from "zustand";
import { DepostisMethods, WithdrawMethods } from "@/types/api";

export const useUpdatePageNavigation = create<{
  page: string;
  setPage: (page: string) => void;
}>((set) => ({
  page: "",
  setPage: (page) => set((state) => ({ ...state, page })),
}));

export const usePaymentMethods = create<{
  type?: "withdraw" | "deposit";
  allMethods: WithdrawMethods[] | DepostisMethods[];
  methods: WithdrawMethods[] | DepostisMethods[];
  currentMethod: string;
  setAllMethods: (methods: WithdrawMethods[] | DepostisMethods[]) => void;
  setMethod: (methodName: string) => void;
  setType: (type: "withdraw" | "deposit") => void;
}>((set) => ({
  type: undefined,
  allMethods: [],
  methods: [],
  currentMethod: "",
  setType: (type) => set((state) => ({ ...state, type })),
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

interface CasinoSearchProps {
  search: string;
  gameType: string;
  isSearchShow: boolean;

  setSearch: (search: string) => void;
  setGameType: (gameType: string) => void;
  setSearchShow: (isSearchShow: boolean) => void;
}

export const useCasinoSearch = create<CasinoSearchProps>((set) => ({
  search: "",
  gameType: "casino",
  isSearchShow: false,

  setSearch: (search) => set((state) => ({ ...state, search })),
  setGameType: (gameType) => set((state) => ({ ...state, gameType })),
  setSearchShow: (isSearchShow) => set((state) => ({ ...state, isSearchShow })),
}));
