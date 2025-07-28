import { Play } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Blog() {
  const blogs = [
    {
      id: "01",
      title: "Mastering UI/UX Design Principles",
      description:
        "Key principles for creating intuitive and visually appealing user interfaces.",
      url: "https://dev.to/sofia-tech/mastering-uiux-design-principles-5fp4",
      date: "Mar 7, 2025",
    },
    {
      id: "02",
      title: "Understanding TypeScript: A Friendly Guide",
      description:
        "Beginner-friendly intro to TypeScript and its core concepts.",
      url: "https://dev.to/kaliacad/understanding-typescript-a-friendly-guide-3pal",
      date: "Aug 8, 2024",
    },
    {
      id: "11",
      title: "My internship journey at HNG",
      description: "Lessons and experiences from my internship at HNG.",
      url: "https://dev.to/birusha/my-internship-journey-at-hng-5cg2",
      date: "Jul 2, 2024",
    },
    {
      id: "12",
      title: "My Journey Internship at Kali Academy",
      description: "Key takeaways from my internship at Kali Academy.",
      url: "https://dev.to/kaliacad/my-journey-internship-at-kali-academy-5bng",
      date: "Jun 14, 2024",
    },
    {
      id: "13",
      title: "CLASSES in TS",
      description: "Understanding classes and OOP concepts in TypeScript.",
      url: "https://dev.to/birusha/classes-ts-20o2",
      date: "Jun 12, 2024",
    },
    {
      id: "14",
      title: "Object Oriented Programming in JavaScript",
      description: "Core OOP principles applied to JavaScript development.",
      url: "https://dev.to/birusha/object-oriented-programming-in-js-3pfk",
      date: "Mar 29, 2024",
    },
  ];

  return (
    <div className="border overflow-hidden">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[70%] p-4">Article</TableHead>
            <TableHead className="w-[30%] p-4 text-right">Posted on</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id} className="hover:bg-muted/50">
              <TableCell className="p-4 max-w-[300px]">
                <div className="flex items-start gap-3">
                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <div className="flex items-center justify-center size-10 rounded-lg bg-blue-500/10">
                      <Play className="size-4 text-blue-500" />
                    </div>
                  </a>
                  <div className="space-y-1 overflow-hidden">
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <p className="font-medium line-clamp-2 hover:text-blue-500 transition-colors">
                        {blog.title}
                      </p>
                    </a>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="p-4 text-right text-muted-foreground">
                {blog.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
