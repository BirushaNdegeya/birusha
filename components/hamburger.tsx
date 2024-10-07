import { MenuIcon } from "lucide-react";
import { AiOutlineClose } from "react-icons/ai";

export default function Hamburger({
  setHamburger,
  hamburger,
}: IhamburgerProps): JSX.Element {
  return (
    <div
      onClick={() => setHamburger(!hamburger)}
      className="md:hidden cursor-pointer absolute top-[20px] right-6 flex-col items-center h-6 w-6 space-y-2"
    >
      {!hamburger ? (
        <MenuIcon className="fill-foreground w-6 h-6" />
      ) : (
        <AiOutlineClose className="fill-foreground w-6 h-6" />
      )}
    </div>
  );
}
