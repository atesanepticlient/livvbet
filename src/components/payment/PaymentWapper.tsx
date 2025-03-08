"use client";
import { PaymentMethod } from "@/store/types";
import { usePaymentMethods } from "@/store/useStore";
import React, { useEffect } from "react";

export const fakePaymentMethods: PaymentMethod[] = [
  {
    methodName: "E-Wallet",
    wallets: [
      {
        walletName: "Bkash",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
        deposit: {
          wallet: "Bkash",
          minimumDeposit: 50,
          depositRange: [50, 5000],
          maximumDeposit: 5000,
        },
        isActive: true,
      },
      {
        walletName: "Nagad",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
        deposit: {
          wallet: "Nagad",
          minimumDeposit: 50,
          depositRange: [50, 7000],
          maximumDeposit: 7000,
        },
        isActive: true,
      },
      {
        walletName: "Rocket",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
        deposit: {
          wallet: "Rocket",
          minimumDeposit: 100,
          depositRange: [100, 5000],
          maximumDeposit: 5000,
        },
        isActive: true,
      },
    ],
  },
  {
    methodName: "Card Payment",
    wallets: [
      {
        walletName: "Visa",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
        deposit: {
          wallet: "Visa",
          minimumDeposit: 200,
          depositRange: [200, 10000],
          maximumDeposit: 10000,
        },
        isActive: true,
      },
      {
        walletName: "MasterCard",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
        deposit: {
          wallet: "MasterCard",
          minimumDeposit: 200,
          depositRange: [200, 12000],
          maximumDeposit: 12000,
        },
        isActive: true,
      },
      {
        walletName: "American Express",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
        deposit: {
          wallet: "American Express",
          minimumDeposit: 500,
          depositRange: [500, 15000],
          maximumDeposit: 15000,
        },
        isActive: false,
      },
    ],
  },
  {
    methodName: "Cryptocurrency",
    wallets: [
      {
        walletName: "Bitcoin",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
        deposit: {
          wallet: "Bitcoin",
          minimumDeposit: 0.0001,
          depositRange: [0.0001, 1],
          maximumDeposit: 1,
        },
        isActive: true,
      },
      {
        walletName: "Ethereum",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
        deposit: {
          wallet: "Ethereum",
          minimumDeposit: 0.01,
          depositRange: [0.01, 5],
          maximumDeposit: 5,
        },
        isActive: true,
      },
      {
        walletName: "USDT (Tether)",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Tether_Logo.png",
        deposit: {
          wallet: "USDT",
          minimumDeposit: 10,
          depositRange: [10, 5000],
          maximumDeposit: 5000,
        },
        isActive: true,
      },
    ],
  },
];

const PaymentWapper = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  children,
}: {
  type: "deposit" | "withdraw";
  children: React.ReactNode;
}) => {
  const { setAllMethods } = usePaymentMethods((state) => state);
  useEffect(() => {
    setAllMethods(fakePaymentMethods);
  }, [setAllMethods]);

  return <div>{children}</div>;
};

export default PaymentWapper;
