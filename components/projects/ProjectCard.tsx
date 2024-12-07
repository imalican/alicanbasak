"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { IconType } from "react-icons";

interface Project {
  title: string;
  description: string;
  link: string;
  icon: IconType;
  iconColor: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="relative group">
      <div
        className="absolute inset-0 rounded-large bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition duration-500
          group-hover:[animation:border-glow_8s_ease-out_forwards] bg-[length:200%_100%] bg-[position:-200%_0] 
          border-2 border-transparent"
      />
      <Card
        as="a"
        href={project.link}
        target="_blank"
        className="relative bg-background/60 dark:bg-default-100000/50 backdrop-blur-xl
          h-full
          border-2 border-transparent dark:border-white/10
          transition-all duration-100
          rounded-large
          dark:shadow-lg dark:shadow-default-200/10"
      >
        <CardBody className="p-5">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/80 dark:bg-default-100/50 shadow-small">
              {React.createElement(project.icon, {
                className: project.iconColor,
                size: 24,
              })}
            </div>
            <div>
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-default-500 text-sm">{project.description}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 text-xs font-medium rounded-full 
                  bg-default-100 dark:bg-default-50/50 text-default-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
