import React from 'react';
import Link from 'next/link';


export default function Logo(): JSX.Element {
   return (
      <Link className="text-white" href="#home">
         <p className="text-lg font-light">
            <span className=" mr-1 bg-[#61DAFB] font-semibold text-lg py-1 px-2 rounded text-white">
               B
            </span>
            irusha
         </p>
      </Link>
   );
};