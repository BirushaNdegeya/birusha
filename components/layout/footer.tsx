import { ModeToggle } from "@/components/common/mode-toggle";
import { Calendar, Github, Linkedin, Mail, PhoneCall } from "lucide-react";

export function Footer() {
  // https://calendly.com/birushandegeya/30min -> calendy link
  return (
    <footer className="border-t py-4">
      <div className="flex items-center justify-between">
        <p>
          <span>© {new Date().getFullYear()}</span> | Birusha
        </p>
        <div className="flex items-center gap-4">
          <a
            href="tel:+243971616131"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            <PhoneCall size={16} />
          </a>
          <a
            href="mailto:birushandegeya@gmail.com"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://calendly.com/birushandegeya/30min"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            <Calendar size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/birusha-ndegeya-243b032a9"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
