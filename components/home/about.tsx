"use client";
import { IaboutDetailsProps } from "@/type";
import { collectAppConfig } from "next/dist/build/utils";
import Link from "next/link";
import { useState } from "react";

const details: IaboutDetailsProps[] = [
  {
    name: "Location : ",
    description: "DRC, North-Kivu",
  },
  {
    name: "Website : ",
    description: "DRC, North-Kivu",
  },
  {
    name: "Email : ",
    description: "DRC, North-Kivu",
  },
];

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
                  "My name is Josué Makuta, I am a full-stack web developer. I have always been passionate about technology and how it can be used to solve real-world problems. That's why I decided to pursue a career in web development."
                }
              </p>
              {collapse && (
                <div className=" flex flex-col gap-4  ">
                  <p>
                    {
                      "I have experience working with various programming languages such as HTML, CSS, and JavaScript. I am also proficient in using popular web development frameworks like React, Next.js, and ExpressJs.My expertise lies in developing responsive and user-friendly websites that are optimized for performance and search engines."
                    }
                  </p>
                  <p>
                    {
                      "I am also skilled in building robust backend systems that can handle large amounts of data and traffic. Apart from technical skills, I believe that communication is key to successful project delivery. That's why I always strive to maintain clear communication with my clients throughout the development process to ensure that their needs are met. When I'm not coding or learning new technologies, you can find me reading books or playing musics."
                    }
                  </p>
                  <p>
                    {
                      "Thank you for taking the time to read my about page. If you have any questions or would like to discuss a project, feel free to contact me!"
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
                🌍 Josue Makuta
              </Link>
            </div>
            <div className=" flex flex-col gap-2 ">
              <p>Email : </p>
              <Link
                href="mailto:makutajosue@gmail.com"
                className="text-primary"
              >
                ✉️ makutajosue@gmail.com
              </Link>
            </div>
            <div id="projects" className=" flex flex-col gap-2 ">
              <p>Phone : </p>
              <Link href="tel:+243972383759" className="  ">
                📞 +243 972 383 759
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
