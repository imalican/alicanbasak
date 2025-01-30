"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
