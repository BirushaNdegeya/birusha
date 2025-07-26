import { GithubIcon } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background backdrop-blur supports-[backdrop-filter]:bg-background border-b">
      <div className="max-w-3xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <Button variant="outline">Birusha</Button>
          <div className="flex gap-4 items-center">
            <p>Projects</p>
            <p>Blog</p>
            <p>Mentorship</p>
            <Button size="icon">
              <GithubIcon />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
