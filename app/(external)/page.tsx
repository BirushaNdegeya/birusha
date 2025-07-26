"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { motion } from "framer-motion";
import { Skills } from "@/components/sections/skills";
import { SpringElement } from "@/components/animate-ui/components/spring-element";

export default function Home() {
  return (
    <>
      {/* presentation profile */}
      <div className="font-mono">
        <Button>About Me</Button>
        <div className="flex justify-between">
          <div className="space-y-4">
            <h1>Hello! 👋🏻</h1>
            <p>
              I'm Birusha Ndegeya, developer turned indie hacker. On a mission
              to make $1,000,000 in revenue, while sharing everything along the
              way. my resume →{" "}
            </p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6"
            >
              <div className="bg-gray-900/90 backdrop-blur-md border border-sky-500/30 px-4 py-2 inline-flex items-center gap-4 rounded-xl shadow-lg  hover:border-sky-400/40 transition-all duration-300">
                <div className="relative size-3 bg-emerald-500 rounded-full">
                  <span className="absolute inset-0 bg-emerald-500/70 animate-ping rounded-full"></span>
                </div>
                <div className="text-sm font-medium text-white">
                  Available for new projects
                </div>
              </div>
            </motion.div>
          </div>
          <SpringElement>
            <Avatar className="size-32">
              <AvatarImage
                draggable={false}
                className="object-cover"
                alt="Birusha Ndegeya's profile photo"
                src="/birusha.png"
              />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
          </SpringElement>
        </div>
      </div>
      <Skills />
    </>
  );
}
