"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import ProjectCard from "@/components/ProjectCard";
import { title } from "@/components/primitives";
import { projects } from "@/data/projects";

export const ProjectsSection = () => {
  // En son eklenen 3 projeyi al
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className={title({ size: "md" })}>Featured Projects</h2>
          <Button
            as={Link}
            className="font-medium border-violet-500/20 hover:border-violet-500/40 transition-colors"
            href="/projects"
            variant="bordered"
          >
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
