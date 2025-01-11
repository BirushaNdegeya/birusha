import { IprojectProps } from "@/type";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";

const projects: IprojectProps[] = [
  {
    title: "Libraryware",
    description:
      "Libraryware is an online platform that makes reading interactive and social. Users can access books, bookmark sections, and share their thoughts with friends, enhancing their reading experience through connection and collaboration. ",
    images: ["link1", "link2", "link3"],
    githubLink: "https://github.com/sofia-goma/libraryware",
    liveLink: "https://sofia-library.netlify.app/",
  },

  {
    title: "Programiz-Pro Clone",
    description:
      "This is the clone of the official site of Programiz pro. So far, it has no functionality, this is just the design performed for learning purposes.",
    images: ["link1", "link2", "link3"],
    githubLink: "https://github.com/JoeMakuta/Programiz-Pro",
    liveLink: "https://joemakuta.github.io/Programiz-Pro/",
  },
  {
    title: "Emi",
    description:
      "This web application was developed as part of an intensive workshop with Wikimedia RDC. Its main objective is to filter the available data on Wikimedia and identify the most searched articles in a given country.",
    images: ["link1", "link2", "link3"],
    githubLink: "https://github.com/kaliacad/mostvisitedarticle",
    liveLink: "https://emingi.netlify.app/",
  },

  // {
  //   title: "M-Tech App Backend",
  //   description:
  //     "The M-Tech app is an professional web service for storing and management purposes. It allows the user to store and manage everything about renting.",
  //   images: ["link1", "link2", "link3"],
  //   githubLink: "https://github.com/JoeMakuta/M-Tech",
  //   liveLink: "",
  // },

  // {
  //   title: "Attendance App",
  //   description:
  //     "An application that records attendances by scanning Qr Codes, and displays a customisable detail report for students and teachers.",
  //   images: ["link1", "link2", "link3"],
  //   githubLink: "https://github.com/JoeMakuta/attendancy-front",
  //   liveLink: "https://attendancy-front.vercel.app/",
  // },

  // {
  //   title: "JobberYou App",
  //   description:
  //     "A job board application that lets users easily search, apply and post job opportunities,",
  //   images: ["link1", "link2", "link3"],
  //   githubLink: "https://github.com/JoeMakuta/Jobber_You_client",
  //   liveLink: "https://jobber-you-client.vercel.app/",
  // },

  // {
  //   title: "URL Shortener App",
  //   description:
  //     "This is a web application that help you make long URLs short.",
  //   images: ["link1", "link2", "link3"],
  //   githubLink: "https://github.com/JoeMakuta/UrlShortner",
  //   liveLink: "https://urlshortner-6dd0.onrender.com/",
  // },

  // {
  //   title: "CarDocBox",
  //   description:
  //     "An application that helps the traffic police control car documents by scanning printed QR codes. Users save, keep track of  their car documents",
  //   images: ["link1", "link2", "link3"],
  //   githubLink: "https://github.com/JoeMakuta/Car-Doc-Box-Frontend",
  //   liveLink: "https://car-document-control.vercel.app/",
  // },

  // {
  //   title: "ChatApp",
  //   description:
  //     "A real time chat application that unables users to chat with others",
  //   images: ["link1", "link2", "link3"],
  //   githubLink: "https://github.com/JoeMakuta/Express-Chat-App-Frontend",
  //   liveLink: "https://express-chat-app-frontend.vercel.app/",
  // },
];

export default function Projects() {
  const [showMore] = useState<boolean>(false);
  return (
    <section className="bg-background w-screen flex justify-center items-center">
      <div className=" flex justify-between gap-6 max-w-[1400px] flex-wrap w-[98vw]  p-6 border-t-[1px] py-10 border-t-border">
        <h1 className=" font-bold ">Projects : </h1>
        <div className=" flex flex-col gap-4 w-full text-sm  md:w-[80%]   flex-wrap md:flex-row  ">
          {projects
            .slice(0, showMore ? projects.length : 3)
            .map((elt, index) => {
              return (
                <div
                  className=" bg-background flex flex-col gap-2   md:w-[30%] first-line:border-gray-300  hover:bg-secondary hover:text-secondary-foreground animate-text transition-all hover:bg-opacity-30 rounded-xl p-4 cursor-pointer"
                  key={index}
                >
                  <h1 className=" font-bold ">{elt.title}</h1>
                  <p className=" border-t-[1px] text-foreground  border-border pt-2 ">
                    {elt.description.substring(0, 100) + " ..."}
                  </p>
                  <div className=" flex self-end gap-3 ">
                    {elt.liveLink !== "" && (
                      <Link
                        href={elt.liveLink}
                        title="Demo Link"
                        target="__blank"
                      >
                        <RxExternalLink
                          size={15}
                          className=" cursor-pointer text-secondary-foreground hover:text-foreground transition-all"
                        />
                      </Link>
                    )}
                    {elt.githubLink !== "" && (
                      <Link
                        title="Github Link"
                        href={elt.githubLink}
                        target="__blank"
                      >
                        <AiFillGithub
                          size={15}
                          className="cursor-pointer text-secondary-foreground hover:text-foreground transition-all"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          {/* <button
            className="font-bold self-end"
            onClick={() => {
              setShowMore((e) => !e);
            }}
          >
            {showMore ? "Show less" : "Show more"}
          </button> */}
        </div>
      </div>
    </section>
  );
}
