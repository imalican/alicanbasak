"use client";

import React from "react";
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

// Move these to a separate types file (types/index.ts)
export const featuredContent = [
  /*...*/
];
export const testimonials = [
  /*...*/
];
