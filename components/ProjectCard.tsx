"use client";

import { Card, CardBody } from "@nextui-org/card";

import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      isPressable
      as="a"
      className="group relative block overflow-hidden rounded-xl bg-white/10
      before:absolute before:inset-0 before:z-0
      before:bg-gradient-to-r before:from-transparent before:via-violet-500/10 before:to-transparent
      before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-[3000ms]
      after:absolute after:inset-0 after:z-0 after:bg-gradient-to-r
      after:from-transparent after:via-white/10 after:to-transparent
      after:translate-x-[-200%] hover:after:translate-x-[200%]
      after:transition-transform after:duration-[3000ms] after:delay-150
      border border-violet-500/10 backdrop-blur-sm
      transition-all duration-100 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
      href={project.link}
    >
      <CardBody className="relative z-10 p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-violet-500/10 transition-all duration-300 group-hover:bg-violet-500/20">
            <project.icon className="w-6 h-6 text-violet-500 transition-all duration-300 group-hover:text-violet-400" />
          </div>
          <h3 className="font-semibold text-xl transition-colors duration-300 group-hover:text-violet-400">
            {project.title}
          </h3>
        </div>

        <p className="text-default-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-500
              transition-all duration-300 group-hover:bg-violet-500/20 group-hover:text-violet-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
