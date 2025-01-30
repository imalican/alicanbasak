"use client";

import { Button } from "@nextui-org/button";
import { useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");

  // Sadece "all" kategorisini kullan
  const categories = ["all"];

  // Tüm projeleri göster
  const filteredProjects = projects;

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
              A collection of projects I&apos;ve worked on, including
              open-source contributions and personal experiments.
            </p>
          </div>

          {/* Filtreler - sadece All butonu */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              className="bg-violet-500/10 text-violet-500"
              size="sm"
              variant="light"
            >
              All Projects
            </Button>
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
