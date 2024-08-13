import { ReactNode } from "react";

interface Iprops {
   link?: string;
   label: string;
   icon?: ReactNode;
}

export default function Button({ label, link, icon }: Iprops): JSX.Element {
   return (
      <button className=" transition-all hover:shadow-lg text-white bg-[#61DAFB] hover:opacity-90 h-10 text-md rounded-2xl px-6 flex items-center">
         {link ? <a href={link}>{label}</a> : <span className="font-bold">{label}</span>}
         {icon && icon}
      </button>
   );
}
