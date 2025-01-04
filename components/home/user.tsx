"use client";
// import { useEffect } from "react";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import Link from "next/link";
import { IsocialMediaProps } from "@/type";

export const SocialMedia: IsocialMediaProps[] = [
  {
    label: "Twitter",
    icon: <AiFillTwitterCircle size={20} />,
    link: "https://twitter.com/BNdegeya62741",
  },
  {
    label: "LinkedIn",
    icon: <AiFillLinkedin size={20} />,
    link: "https://www.linkedin.com/in/birusha-ndegeya-243b032a9",
  },
  {
    label: "Github",
    icon: <AiFillGithub size={20} />,
    link: "https://github.com/BirushaNdegeya",
  },
  {
    label: "Facebook",
    icon: <AiFillFacebook size={20} />,
    link: "https://www.facebook.com/espoir.ndegeya.3/",
  },
];

export default function User() {
  return (
    <section className="max-w-[1400px] h-[90vh] min-h-[500px] max-h-[800px] flex justify-center items-center flex-col gap-10 md:gap-5">
      <div className="flex justify-center z-10 items-center gap-5 flex-col">
        <div className="overflow-hidden w-[7em] h-[7em] rounded-full">
          <Image
            src={"/images/birusha.jpg"}
            width={400}
            height={400}
            alt="Birusha Ndegeya's profile image"
            className="transition-all"
          />
        </div>
        <p>
          Hello, {"I am Birusha!"} <span className="text-2xl ">👋</span>
        </p>
      </div>
      <h1 className="text-[2rem] md:text-[2.5rem] w-[85vw] lg:w-[45vw] bg-clip-text text-foreground leading-tight text-center font-bold">
        In order to be irreplaceable, one must always be different.
      </h1>
      <a
        href="#projects"
        className="transition-all animate-text w-[10em] md:w-[15em] flex justify-center items-center gap-2 h-14 rounded-md hover:scale-105 "
      >
        <p>Latest Projects</p>
      </a>
      <div className="flex gap-5 absolute bottom-1 md:bottom-10">
        {SocialMedia.map((elt, index) => {
          return (
            <div key={index}>
              <Link href={elt.link} target="__blank">
                {elt.icon}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
