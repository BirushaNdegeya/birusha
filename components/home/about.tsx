"use client";
// import { IaboutDetailsProps } from "@/type";
// import { collectAppConfig } from "next/dist/build/utils";
import Link from "next/link";
import { useState } from "react";

// const details: IaboutDetailsProps[] = [
//   {
//     name: "Location : ",
//     description: "DRC, North-Kivu",
//   },
//   {
//     name: "Website : ",
//     description: "DRC, North-Kivu",
//   },
//   {
//     name: "Email : ",
//     description: "DRC, North-Kivu",
//   },
// ];

export default function About() {
  const [collapse, setCollapse] = useState<boolean>(false);
  return (
    <section className="bg-background text-foreground w-screen flex justify-center items-center">
      <div className="flex justify-between gap-6 max-w-[1400px] flex-wrap w-[98vw] box-border p-6 border-t-[1px] py-10 border-border">
        <h1 className=" font-bold ">About Me</h1>
        <div className=" flex flex-col gap-5 w-full text-sm  md:w-[80%] ">
          <div>
            <div className="font-light  flex flex-col gap-4 ">
              <p>
                {
                  "My name is Birusha Ndegeya, and I am a passionate full-stack web developer. My journey in technology is driven by a commitment to using innovative solutions to address real-world challenges."
                }
              </p>
              {collapse && (
                <div className=" flex flex-col gap-4  ">
                  <p>
                    {
                      "With expertise in modern web development technologies like React, Next.js, TypeScript, PostgreSQL, and Node.js, I specialize in building responsive, user-friendly, and high-performance applications. My experience also includes participating in open-source projects and impactful events like Wishathon 2024."
                    }
                  </p>
                  <p>
                    {
                      "In addition to my technical skills, I value effective communication and collaboration, ensuring that every project I undertake aligns with client needs and expectations. Beyond coding, I enjoy exploring new technologies, contributing to open-source communities, and participating in discussions on digital innovation."
                    }
                  </p>
                  <p>
                    {
                      "Thank you for visiting my page. If you’re interested in collaborating or learning more about my work, feel free to reach out!"
                    }
                  </p>
                </div>
              )}
            </div>
            <button
              className="font-bold"
              onClick={() => {
                setCollapse(!collapse);
              }}
            >
              {!collapse ? " Read more" : " Show less"}
            </button>
          </div>
          <div className="flex flex-wrap md:flex-row flex-col gap-4 justify-around bg-secondary text-secondary-foreground bg-opacity-30 rounded-md p-4">
            <div className=" flex flex-col gap-2 ">
              <p className="text-secondary-foreground">Location : </p>
              <Link href="https://goo.gl/maps/dVoVkKAKDjyzurbs8">
                {" "}
                🌍 DRC, North-Kivu
              </Link>
            </div>
            <div className=" flex flex-col gap-2 ">
              <p>WebSite : </p>
              <Link href="#" className=" text-blue-400  ">
                🌍 Birusha Ndegeya
              </Link>
            </div>
            <div className=" flex flex-col gap-2 ">
              <p>Email : </p>
              <Link
                href="mailto:birushandegeya@gmail.com"
                className="text-primary"
              >
                ✉️ birushandegeya@gmail.com
              </Link>
            </div>
            <div id="projects" className=" flex flex-col gap-2 ">
              <p>Phone : </p>
              <Link href="tel:+243971616131" className="  ">
                📞 +243 971 616 131
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
