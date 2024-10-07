import React from "react";
import Link from "next/link";

export default function Logo(): JSX.Element {
  return (
    <div className="border border-border max-[770px]:self-start  flex px-5 items-center justify-center py-2  p-4 z-20 mt-2">
      <Link href="#home">
        <p className="text-lg font-light">
          <span className=" mr-1 bg-ring font-semibold text-lg py-1 px-2 rounded text-background">
            B
          </span>
          irusha
        </p>
      </Link>
    </div>
  );
}
