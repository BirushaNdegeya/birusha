'use client';
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Code2Icon, Clipboard, View, ClipboardCheckIcon } from 'lucide-react';
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast";


export default function ProjectCard({
   title,
   description,
   picture,
   view,
   github
}: IprojectCard): JSX.Element {
   const { toast } = useToast();
   const [isCopied, setIsCopied] = useState(false);
   const handleCopyLink = () => {
      setIsCopied(!isCopied);
      toast({
         variant: "success",
         title: "Hello",
         description: "HEllo world, and Goodbye crual world!"
      })
      setTimeout(() => {
         setIsCopied(!isCopied);
      }, 5000);
      console.log("handle copy link executed!");
   }
   return (
      <Card>
         <CardHeader>
            <CardTitle className="text-primary">{title}</CardTitle>
            <CardDescription className="text-muted-foreground">
               {description.length > 100
                  ? description.substring(0, 100) + ". . ."
                  : description}
            </CardDescription>
         </CardHeader>
         <CardContent>
            <a target="_blank" href={view}>
               <Image className="h-44 w-full object-cover" src={picture} alt="chataw" />
            </a>
         </CardContent>
         <CardFooter className="flex items-center justify-between">
            <a href={github} target="_blank">
               <Button variant="outline"><Code2Icon /></Button>
            </a>
            <a href={view} target="_blank">
               <Button variant="outline"><View /></Button>
            </a>
            <Button variant="outline" onClick={handleCopyLink}>{isCopied ? <ClipboardCheckIcon /> : <Clipboard />}</Button>
         </CardFooter>
      </Card>
   );
}