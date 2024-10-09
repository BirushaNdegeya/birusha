import { Loader } from "lucide-react";

export function Loading({ title }: { title?: string }) {
  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <Loader className="h-32 w-32 animate-spin text-primary" />
      <div className="text-xl">Loading {title}...</div>
    </div>
  );
}
