import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
export default function IntroduceUser(): JSX.Element {
   return (
      <div className="relative">
         <div className="flex px-2 flex-col gap-2">
            <div className="flex flex-col">
               <h3 className="font-light text-xl">
                  Hello there 👋! , I am <span className="text-primary font-normal">Birusha Ndegeya</span>
               </h3>
               <h2 className="text-ring font-semibold text-2xl">Software Developer</h2>
            </div>
            <div className="flex gap-4 flex-col">
               <p className=" max-[550px]:w-[22rem] w-[25.5rem] text-lg font-light">
                  Passionate software developer dedicated to crafting innovative solutions that drive business success.
               </p>
               <div>
                  <Button variant="outline" size="lg"><Download size={16} className="mr-2" /> Download CV</Button>
               </div>
            </div>
         </div>
      </div>
   );
}
