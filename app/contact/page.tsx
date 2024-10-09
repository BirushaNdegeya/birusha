import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-background text-foreground">
      <div className="p-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Contact us
        </h2>

        <form className="space-y-3 max-w-xl mx-auto">
          <Input type="text" placeholder="name" />
          <Input type="email" placeholder="Email" />
          <Input type="number" placeholder="Phone No." />
          <Textarea placeholder="Type your message here." />
          <Button className="w-full">Send message</Button>
        </form>
      </div>
    </div>
  );
}
