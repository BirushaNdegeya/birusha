import { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./index.css";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
   title: "birusha ndegeya",
   description: "Birusha Ndegeya's portfolio, software developer - TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={inter.className}>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               {children}
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   );
}