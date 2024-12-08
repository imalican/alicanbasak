import { Metadata } from "next";

export default function ProjectsPage() {
  return (
    <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold font-space mb-8">Projects</h1>
      <p className="text-default-600 text-lg">Coming soon...</p>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal and open source projects I have worked on.",
};
