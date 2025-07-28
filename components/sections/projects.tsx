import { Card, CardContent } from "../ui/card";
import { BookOpenText, School } from "lucide-react";
import { MotionHighlight } from "@/components/animate-ui/effects/motion-highlight";

const CARDS = [
  {
    value: "1",
    icon: School,
    title: "Tantor Learning",
    url: "https://tantor-learning.vercel.app/",
    description:
      "E-Learning application for certified Online Courses Available Across France.",
  },
  {
    value: "2",
    icon: BookOpenText,
    title: "Libraryware",
    url: "https://sofia-library.netlify.app/",
    description:
      "Libraryware is an online platform that makes reading interactive and social.",
  },
  // {
  //   value: "3",
  //   icon: ShowerHead,
  //   title: "Emi",
  //   description:
  //     "Filter the available data on Wikimedia and identify the most searched articles in a given country.",
  // },
  // {
  //   value: "4",
  //   icon: Blocks,
  //   title: "Component Distribution",
  //   description:
  //     "Install the components in your project and modify them as you wish.",
  // },
];

export function Projects() {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-sans font-bold">My projects</h2>
      <p className="mb-4 text-muted-foreground">
        The projects I've been working on since 2019.
      </p>
      <Card>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MotionHighlight hover className="rounded-xl">
              {CARDS.map((card) => (
                <div key={card.value} data-value={card.value}>
                  <div className="p-4 flex flex-col border rounded-xl">
                    <div className="flex items-center justify-around size-10 rounded-lg bg-blue-500/10 mb-2">
                      <card.icon className="size-5 text-blue-500" />
                    </div>
                    <a
                      href={card.url}
                      className="hover:text-blue-500 transition-colors"
                      target="_blank"
                    >
                      <p className="text-base font-medium mb-1">{card.title}</p>
                    </a>
                    <p className="text-sm text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </MotionHighlight>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
