"use client";
import { GithubIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/#projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background border-b">
      <div className="max-w-3xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <Button variant="outline">Birusha</Button>
          <div className="flex gap-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-blue-500 transition-colors ${
                  pathname === link.href ||
                  (link.href === "/#projects" && pathname === "/")
                    ? "text-blue-500"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="https://github.com/BirushaNdegeya" target="_blank">
              <Button size="icon" variant="ghost">
                <GithubIcon className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
