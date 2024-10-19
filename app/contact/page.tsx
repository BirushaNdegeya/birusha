import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import MainContainer from "@/components/layouts/contents/main-container";
export default function Contact() {
  return (
    <MainContainer>
      <div className="bg-background text-foreground w-full">
        <div className="p-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Contact us
          </h2>

          <form>
            <Input type="text" placeholder="name" />
            <Input type="email" placeholder="Email" />
            <Input type="number" placeholder="Phone No." />
            <Textarea placeholder="Type your message here." />
            <Button className="w-full">Send message</Button>
          </form>
        </div>
      </div>
    </MainContainer>
  );
}
