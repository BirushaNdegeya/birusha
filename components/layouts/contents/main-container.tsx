import { ReactNode } from "react";

export default function MainContainer({ children }: { children?: ReactNode }) {
  return (
    <section className="w-full max-[900px] h-full flex items-center justify-center">
      {children}
    </section>
  );
}
