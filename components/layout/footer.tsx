import { ModeToggle } from "@/components/common/mode-toggle";
import { Calendar, Github, Linkedin, Mail, PhoneCall } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-4">
      <div className="flex items-center justify-between">
        <p>
          <span>© {new Date().getFullYear()}</span> | Birusha
        </p>
        <div className="flex items-center gap-4">
          <PhoneCall />
          <Mail />
          <Calendar />
          <Github />
          <Linkedin />
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
