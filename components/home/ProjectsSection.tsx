"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  // En son 3 projeyi göster
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold font-space">
              Featured{" "}
              <span className="text-violet-500 dark:text-violet-400">
                Projects
              </span>
            </h2>
            <p className="text-default-500">
              A selection of my recent projects and open-source contributions.
            </p>
          </div>

          <Button
            as={Link}
            className="font-medium border-violet-500/20 hover:border-violet-500/40 transition-colors sm:self-start"
            href="/projects"
            variant="bordered"
          >
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
