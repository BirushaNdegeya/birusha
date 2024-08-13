import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";

type RootLayoutProps = {
   children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "birusha ndegeya",
   description: "Birusha Ndegeya's portfolio, software developer - TypeScript",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>){
   return (
      <html lang="en" className="bg-[#21222A] text-white">
         <body className={inter.className}>{children}</body>
      </html>
   );
}