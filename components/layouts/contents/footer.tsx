"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center sticky bottom-0 bg-background">
      <Button variant="link" onClick={() => router.push("/")}>
        Portfolio
      </Button>
      <Button variant="link" onClick={() => router.push("/projects")}>
        Projects
      </Button>
      <Button variant="link" onClick={() => router.push("/contact")}>
        Contact
      </Button>
    </div>
  );
}
