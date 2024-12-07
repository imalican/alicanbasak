"use client";

import React from "react";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectHeader } from "../projects/ProjectHeader";
import { projects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section className="py-16 max-w-[1440px] mx-auto">
      <div className="space-y-8">
        <ProjectHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
