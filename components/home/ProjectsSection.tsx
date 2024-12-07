"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { FaReact, FaShoppingCart, FaMobile } from "react-icons/fa";
import { title } from "@/components/primitives";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and Node.js",
    link: "https://github.com/yourusername/project-one",
    icon: <FaReact className="text-cyan-500" size={24} />,
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "Project Two",
    description: "Full-stack e-commerce platform with real-time features",
    link: "https://github.com/yourusername/project-two",
    icon: <FaShoppingCart className="text-violet-500" size={24} />,
    tags: ["Next.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Project Three",
    description: "Mobile-first social media dashboard",
    link: "https://github.com/yourusername/project-three",
    icon: <FaMobile className="text-indigo-500" size={24} />,
    tags: ["React Native", "Firebase", "Redux"],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className={title({ size: "md" })}>Featured Projects</h2>
          <p className="text-default-600 mt-4 max-w-2xl mx-auto font-satoshi">
            A collection of projects that showcase my skills and experience in
            building digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              isPressable
              isHoverable
              as="a"
              href={project.link}
              target="_blank"
              className="group border-none bg-default-50/50 dark:bg-default-100/50 backdrop-blur-xl 
                transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
                hover:bg-gradient-to-br hover:from-violet-500/10 hover:via-fuchsia-500/10 hover:to-cyan-500/10
                dark:hover:from-violet-500/20 dark:hover:via-fuchsia-500/20 dark:hover:to-cyan-500/20
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-violet-500/0 before:via-fuchsia-500/0 before:to-cyan-500/0
                before:opacity-0 before:transition-opacity hover:before:opacity-100 overflow-hidden
                after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-violet-500/5 after:to-transparent
                after:opacity-0 after:transition-opacity hover:after:opacity-100 after:blur-2xl"
            >
              <CardBody className="p-5 relative z-10">
                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-xl bg-white/80 dark:bg-default-200/50 shadow-small
                    group-hover:shadow-md group-hover:shadow-violet-500/25 transition-shadow
                    group-hover:bg-gradient-to-br group-hover:from-white/90 group-hover:to-white/80
                    dark:group-hover:from-default-200/60 dark:group-hover:to-default-200/50"
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-default-500 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full 
                        bg-default-100 dark:bg-default-50/50 text-default-600
                        group-hover:bg-violet-500/10 group-hover:text-violet-700
                        dark:group-hover:bg-violet-500/20 dark:group-hover:text-violet-300
                        transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
