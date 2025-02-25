"use client";
// import Footer from "@/components/footer/footer";
import About from "@/components/home/about";
// import Posts from "@/components/home/posts";
import Projects from "@/components/home/projects";
import User from "@/components/home/user";
import Menu from "@/components/menu/menu";
// import Partners from "@/components/parters/parters";
// import Image from "next/image";

export default function Home() {
  return (
    <Menu>
      <main className="flex justify-center bg-background text-foreground flex-col animate-background items-center">
        <User />
        <About />
        <Projects />
        {/* <Posts /> */}
      </main>
    </Menu>
  );
}
