import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/components/avatar-group";

export function Skills() {
  const AVATARS = [
    {
      src: "/icons/html.svg",
      fallback: "HTML",
      tooltip: "HTML (Hypertext Markup Language)",
    },
    {
      src: "/icons/css.svg",
      fallback: "CSS",
      tooltip: "CSS (Cascading Style Sheet)",
    },
    {
      src: "/icons/javascript.svg",
      fallback: "JS",
      tooltip: "JavaScript",
    },
    {
      src: "/icons/typescript.svg",
      fallback: "TS",
      tooltip: "TypeScript",
    },
    {
      src: "/icons/node.svg",
      fallback: "Node",
      tooltip: "Node JS",
    },
    {
      src: "/icons/react.svg",
      fallback: "React",
      tooltip: "React JS",
    },
    {
      src: "/icons/angular.svg",
      fallback: "Angular",
      tooltip: "Angular JS",
    },
    {
      src: "/icons/git.svg",
      fallback: "Git",
      tooltip: "Git",
    },
    {
      src: "/icons/github.svg",
      fallback: "GitHub",
      tooltip: "GitHub",
    },
    {
      src: "/icons/gitlab.svg",
      fallback: "GitLab",
      tooltip: "GitLab",
    },
    {
      src: "/icons/linux.svg",
      fallback: "Linux",
      tooltip: "Linux distribution",
    },
  ];

  return (
    <div className="py-4">
      <h2 className="text-2xl font-sans font-bold">Technical Expertise</h2>
      <p className="mb-4 text-muted-foreground">
        The tools and technologies I use to bring ideas to life.
      </p>
      <Card className="p-0 m-0">
        <CardContent className="flex items-center justify-center p-4">
          <AvatarGroup className="h-16 -space-x-3">
            {AVATARS.map((avatar, index) => (
              <Avatar
                key={index}
                className="size-16 border-2 border-muted-foreground/20 hover:scale-105 transition-transform duration-300"
              >
                <div className="relative size-full">
                  <AvatarImage
                    src={avatar.src}
                    className={"p-2 bg-white dark:bg-card-foreground rounded-full"}
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
