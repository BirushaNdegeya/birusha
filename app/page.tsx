"use client";
import { useState } from "react";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Home from "@/components/layouts/home";
import About from "@/components/about";
import Projects from "@/components/projects";


export default function HomePage() {
   const [hamburger, setHamburger] = useState<boolean>(false);

   return (
      <div className="scroll-smooth relative w-screen overflow-auto no-scrollbar h-screen">
         <div className="bgcircle1 max-[500px]:-left-[20rem] absolute -top-[10rem] -left-[10rem] w-[40rem] h-[40rem]"></div>
         <Header hamburger={hamburger} setHamburger={setHamburger} />
         <main
            className={`z-30  ${hamburger ? " max-[768px]:h-0" : "h-auto"
               } transition-all duration-500 w-full px-5  flex items-center flex-col overflow-auto no-scrollbar`}
         >
            <Home />
            <About />
            <Projects />
         </main>
         <Footer hamburger={hamburger} />
      </div>
   );
};