import { AiOutlineMail } from "react-icons/ai";
import { SocialMedia } from "../home/user";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground w-[100vw] bottom-0">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex justify-center items-center ">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl">
              Subscribe my newsletter to stay update.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <Input type="email" placeholder="Email Address" />
              <Button className="md:w-auto md:mx-4">Subscribe</Button>
            </div>
          </div>
        </div>

        <hr className="my-6 border-border md:my-8" />

        <div className="flex items-center justify-between">
          <a href="#">
            <div className=" flex justify-center items-center gap-3 ">
              <a
                href="mailto:birushandegeya@gmail.com"
                className=" flex justify-center items-center w-7 h-7 md:w-10 md:h-10 rounded-full border-[1px] border-default_color cursor-pointer "
              >
                <AiOutlineMail />
              </a>
              <div className=" font-bold text-sm md:text-base">
                Birusha Ndegeya
              </div>
            </div>
          </a>

          <div className="flex mx-2">
            <div className=" flex gap-2 md:gap-5">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
