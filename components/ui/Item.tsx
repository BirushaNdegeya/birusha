import React from 'react';
import Link from 'next/link';


export default function SocialMediaItem({
   icon,
   label,
   link,
}: IsocialmediaProps): JSX.Element {
   return (
      <Link href={link} className="flex items-center justify-center gap-1">
         <span className="text-[#61DAFB] h-6 w-6 flex items-center justify-center">
            {icon}
         </span>
         <p className="hidden md:block font-light text-sm">{label}</p>
      </Link>
   );
}