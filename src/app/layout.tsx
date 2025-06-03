import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Suspense } from "react";
import StoreProvider from "./StoreProvider";
import GamesLoader from "./GamesLoader";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Livvbet",
  icons: "/assets/svg/android-chrome-192x192.png",
  description:
    "Livvbet Company Trusted Online Betting Site in Bangladesh, Join 1xbet companl for the ultimate betting experience! Enjoy sports betting, casino games, live dealers, Aviator crash game, and more. Get the best odds and exciting bonuses. Sign up now!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${roboto.className} font-inter antialiased !bg-[#1A1A1A] !text-white`}
      >
        <Suspense>
          <SessionProvider session={session}>
            <StoreProvider>
              {children}
              <GamesLoader />
            </StoreProvider>
          </SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
