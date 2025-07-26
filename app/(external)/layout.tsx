import { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { HexagonBackground } from "@/components/animate-ui/backgrounds/hexagon";
import { Footer } from "@/components/layout/footer";

export default function ExternalLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col font-mono">
      <Header />
      <main className="relative flex-1">
        {/* Fond hexagone (en dessous du contenu) */}
        <HexagonBackground className="absolute inset-0  rounded-xl" />
        {/* Contenu interactif */}
        <div className="relative z-10 h-full max-w-3xl mx-auto bg-transparent p-4">
          <div className="py-4">{children}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
