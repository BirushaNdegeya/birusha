import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/components/avatar-group";

export function Skills() {
  const AVATARS = [
    {
      src: "/icons/html5.svg",
      fallback: "HTML",
      tooltip: "HTML (Hypertext Markup Language)",
      invertDark: false,
    },
    {
      src: "/icons/css3.svg",
      fallback: "CSS",
      tooltip: "CSS (Cascading Style Sheet)",
      invertDark: false,
    },
    {
      src: "/icons/square-js.svg",
      fallback: "JS",
      tooltip: "JavaScript",
      invertDark: true, // JavaScript icon might need inversion
    },
    {
      src: "/icons/react.svg",
      fallback: "REACT",
      tooltip: "ReactJs",
      invertDark: false,
    },
    {
      src: "/icons/github.svg",
      fallback: "GitHub",
      tooltip: "GitHub",
      invertDark: true, // GitHub logo is black in light mode
    },
    {
      src: "/icons/typescript.svg", // Consider adding TypeScript
      fallback: "TS",
      tooltip: "TypeScript",
      invertDark: false,
    },
  ];

  return (
    <div className="py-4">
      <h2 className="text-2xl font-sans font-bold">Technical Expertise</h2>
      <p className="mb-4 text-muted-foreground">
        The tools and technologies I use to bring ideas to life.
      </p>
      <Card className="bg-transparent">
        <CardContent className="flex items-center justify-center p-6">
          <AvatarGroup className="h-24 -space-x-3">
            {AVATARS.map((avatar, index) => (
              <Avatar
                key={index}
                className="size-24 border-2 border-muted-foreground/20 dark:border-muted-foreground/40 hover:scale-110 transition-transform duration-300"
              >
                <div className="relative size-full">
                  <AvatarImage
                    src={avatar.src}
                    className={`${
                      avatar.invertDark ? "dark:invert" : ""
                    } p-2 bg-white dark:bg-muted rounded-full`}
                  />
                  <AvatarFallback className="bg-muted">
                    {avatar.fallback}
                  </AvatarFallback>
                  <AvatarGroupTooltip>
                    <p>{avatar.tooltip}</p>
                  </AvatarGroupTooltip>
                </div>
              </Avatar>
            ))}
          </AvatarGroup>
        </CardContent>
      </Card>
    </div>
  );
}
