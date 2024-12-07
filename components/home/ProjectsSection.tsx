"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { FaReact, FaShoppingCart, FaMobile } from "react-icons/fa";
import { title } from "@/components/primitives";
import Link from "next/link";

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
    <section className="py-16 max-w-[1440px] mx-auto">
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h2
              className={title({ size: "md" })}
              style={{ fontFamily: "Space Grotesk" }}
            >
              Featured Projects
            </h2>
            <p className="text-default-600 mt-2 font-satoshi text-lg">
              A collection of projects that showcase my skills and experience in
              building digital products.
            </p>
          </div>

          <div className="hidden md:block">
            <Link
              href="/projects"
              className="group flex items-center gap-2 whitespace-nowrap font-medium"
            >
              View All
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <div
                className="absolute inset-0 rounded-large bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition duration-500
                  group-hover:[animation:border-glow_8s_ease-out_forwards] bg-[length:300%_100%] bg-[position:-300%_0]
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
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
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
                          bg-default-100 dark:bg-default-50/50 text-default-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Link
            href="/projects"
            className="group flex items-center gap-2 whitespace-nowrap font-medium"
          >
            View All
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
