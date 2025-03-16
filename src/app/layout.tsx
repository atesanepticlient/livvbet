import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Suspense } from "react";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1xBet - Betting Company Online Betting",
  icons: "/assets/images/icon.ico",
  description:
    "Join 1xbet companl for the ultimate betting experience! Enjoy sports betting, casino games, live dealers, Aviator crash game, and more. Get the best odds and exciting bonuses. Sign up now!",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
          <SessionProvider session={session}>
            <StoreProvider>{children}</StoreProvider>
          </SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
