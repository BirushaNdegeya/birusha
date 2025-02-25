"use client";

import { AiOutlineMail } from "react-icons/ai";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import Footer from "../footer/footer";
import { useState } from "react";

// import { BsSunFill } from "react-icons/bs";
import { ImenuDataProps } from "@/type";
// import { ThemeProvider, useTheme } from "next-themes";
import Theme from "./theme";

export const data: ImenuDataProps[] = [
  {
    name: "Blog",
    link: "https://dev.to/birusha",
  },
  {
    name: "GitHub",
    link: "https://github.com/BirushaNdegeya",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/birusha-ndegeya-243b032a9",
  },
];

const Menu = ({ children }: { children: React.ReactNode }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main className={`flex flex-col justify-between min-h-screen`}>
      <nav className="text-foreground max-w-[100vw] shadow-md  tracking-tight  flex flex-col w-screen fixed top-0 z-20 justify-center bg-secondary items-center ">
        <div className="max-w-[1400px]  px-8  w-full bg-inherit dark:bg-dark_bg flex justify-between  py-5 items-center border-b-[1px] dark:border-b-border_color border-b-border">
          <div className=" flex justify-center items-center gap-3 ">
            <a
              href="mailto:birushandegeya@gmail.com"
              className=" flex justify-center items-center w-7 h-7 md:w-10 md:h-10 rounded-full border-[1px] border-default_color cursor-pointer "
            >
              <AiOutlineMail />{" "}
            </a>
            <Link href={"/"} className=" font-bold text-sm md:text-base">
              Birusha Ndegeya
            </Link>
          </div>
          <div className=" flex md:hidden cursor-pointer ">
            <RiMenu2Line size={23} onClick={handleMenu} />
          </div>
          <div className="hidden md:flex gap-[3rem]">
            <div className=" hidden text-sm md:flex gap-4 ">
              {data.map((elt, index) => {
                return (
                  <div key={index}>
                    <Link
                      className=" hover:text-gray-400 transition-all font-bold "
                      href={elt.link}
                      target="__blank"
                    >
                      {elt.name}
                    </Link>
                    {!(index == data.length - 1) && (
                      <span className=" font-light pl-4">|</span>
                    )}
                  </div>
                );
              })}
            </div>
            <Theme setShowMenu={setShowMenu} />
            {/* <div>
                <input
                  className="border-none bg-inherit rounded-full p-0 w-7 h-7"
                  type="color"
                />
              </div> */}
          </div>
        </div>
      </nav>

      {showMenu && (
        <nav className=" flex flex-col w-screen h-screen gap-8 dark:text-white bg-gray-200 fixed top-0 z-20 justify-center items-center  dark:bg-dark_bg">
          <div className="flex  cursor-pointer">
            <RiCloseLine size={23} onClick={handleMenu} />
          </div>
          <div className="flex flex-col justify-center items-center gap-8 ">
            {data.map((elt, index) => {
              return (
                <Link href={elt.link} key={index} onClick={handleMenu}>
                  {elt.name}
                </Link>
              );
            })}
          </div>
          <Theme setShowMenu={setShowMenu} />
        </nav>
      )}

      <div className=" mt-20 ">{children}</div>
      <Footer />
    </main>
  );
};

export default Menu;
