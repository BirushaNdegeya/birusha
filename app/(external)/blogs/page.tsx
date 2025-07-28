import { Blog } from "@/components/sections/blog";

export default function Page() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-sans font-bold">My blogs</h2>
      <p className="mb-4 text-muted-foreground">
        Insights, tutorials, and reflections from my development journey and
        learning experiences.
      </p>
      <Blog />
    </div>
  );
}
