"use client";
import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col gap-8 w-full h-screen items-center justify-center">
      <Loader className="h-32 w-32 animate-spin text-primary" />
      <div className="text-xl">Loading...</div>
    </div>
  );
}
