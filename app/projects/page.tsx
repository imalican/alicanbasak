"use client";

import { Button } from "@nextui-org/button";
import { useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");

  // Benzersiz kategorileri al
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Projeleri filtrele
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;

    return project.category === filter;
  });

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="relative flex flex-col gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold font-space">
              Personal{" "}
              <span className="text-violet-500 dark:text-violet-400">
                Projects
              </span>
            </h1>
            <p className="text-lg text-default-600 max-w-lg">
              A collection of projects I've worked on, including open-source
              contributions and personal experiments.
            </p>
          </div>

          {/* Filtreler */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                className={`capitalize ${
                  filter === category
                    ? "bg-violet-500/10 text-violet-500"
                    : "hover:bg-violet-500/5"
                }`}
                size="sm"
                variant="light"
                onClick={() => setFilter(category)}
              >
                {category === "all" ? "All Projects" : category}
              </Button>
            ))}
          </div>

          {/* Dekoratif çizgi */}
          <div className="w-full h-px bg-gradient-to-r from-violet-500/20 via-violet-500/10 to-transparent" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
