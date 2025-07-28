"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Skills } from "@/components/sections/skills";
import { SpringElement } from "@/components/animate-ui/components/spring-element";
import { Projects } from "@/components/sections/projects";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      {/* presentation profile */}
      <div className="font-mono">
        <Button>About Me</Button>
        <div className="flex justify-between mt-4 gap-8">
          <div className="space-y-4">
            <h1 className="text-2xl font-sans font-bold">Hello! 👋🏻</h1>
            <p>I'm Birusha Ndegeya, I am a Frontend NextJS developer.</p>
            <p>
              I'm seriously into writing pretty code, crafting exceptional UX,
              and using accessibility best practices.{" "}
              <a
                href="/birusha-ndegeya-resume.pdf"
                target="_blank"
                className="hover:text-blue-500 hover:cursor-pointer transition-colors"
              >
                my resume →
              </a>{" "}
            </p>
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
      <div className="flex items-center justify-between pt-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className=""
        >
          <Badge>
            <div className="relative size-3 bg-emerald-500 rounded-full">
              <span className="absolute inset-0 bg-emerald-500/70 animate-ping rounded-full"></span>
            </div>
            <p>Available for new projects</p>
          </Badge>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className=""
        >
          <Badge className="p-0.5">🌍 Gisenyi, Rwanda → Global Remote</Badge>
        </motion.div>
      </div>
      <Skills />
      <Projects />
    </>
  );
}
