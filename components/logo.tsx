import React from 'react';
import Link from 'next/link';


export default function Logo(): JSX.Element {
   return (
      <Link href="#home">
         <p className="text-lg font-light">
            <span className=" mr-1 bg-ring font-semibold text-lg py-1 px-2 rounded text-background">
               B
            </span>
            irusha
         </p>
      </Link>
   );
};