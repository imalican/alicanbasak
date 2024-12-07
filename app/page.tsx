"use client";

import React from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { HeroImage } from "@/components/HeroImage";
import { FaReact, FaShoppingCart, FaMobile } from "react-icons/fa";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section with cyber background */}
      <section className="relative w-full bg-black/5 dark:bg-black/50 backdrop-blur-3xl py-8 overflow-hidden rounded-3xl mx-auto mt-4 max-w-[1400px] px-4">
        {/* Gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-indigo-500/20" />
          <div className="absolute inset-0 bg-gradient-radial from-violet-500/10 via-transparent to-transparent translate-x-[50%]" />
          <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-transparent to-transparent -translate-x-[25%]" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow effects */}
        <div className="absolute -left-24 -top-24 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute -right-24 -bottom-24 w-[500px] h-[500px] bg-secondary/10 dark:bg-secondary/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            {/* Content */}
            <div className="flex-1 space-y-6">
              <h1 className={`${title({ size: "lg" })} font-space`}>
                Crafting Digital
                <br />
                <span className="text-violet-500 dark:text-violet-400">
                  Experiences
                </span>
              </h1>
              <p className="text-xl text-default-600 max-w-lg font-satoshi">
                Through the complexity of code, I discovered the beauty of
                simplicity. Each line written is a step towards creating
                something meaningful.
              </p>
              <div className="flex gap-4">
                <Button
                  as={Link}
                  href="https://github.com/yourusername"
                  className="font-semibold bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-satoshi"
                  size="lg"
                >
                  View Projects
                </Button>
                <Button
                  as={Link}
                  href="/blog"
                  variant="bordered"
                  size="lg"
                  className="font-semibold font-satoshi"
                >
                  Read Blog
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${title({ size: "md" })} font-space mb-16`}>
            Featured Projects
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-background/50 backdrop-blur-lg border border-divider hover:border-violet-500/50 transition-colors"
                isPressable
                as={Link}
                href={project.link}
                target="_blank"
              >
                <CardBody className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-space font-medium mb-2">
                        {project.title}
                      </h3>
                      <p className="text-default-600 text-sm">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-violet-500">{project.icon}</div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300"
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

      {/* Featured Content ve diğer bölümler */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... diğer içerikler ... */}
      </div>
    </div>
  );
}

const featuredContent = [
  {
    title: "Testing JavaScript",
    description: "Learn the principles of testing JavaScript applications",
    className: "font-satoshi",
  },
  {
    title: "React Patterns",
    description: "Advanced patterns for building React applications",
    className: "font-satoshi",
  },
  {
    title: "Epic React",
    description: "The most comprehensive React training available",
    className: "font-satoshi",
  },
];

const testimonials = [
  {
    quote: "This changed how I think about React development",
    name: "Jane Doe",
    title: "Senior Developer",
    avatar: "/avatars/jane.jpg",
    className: "font-satoshi",
  },
  {
    quote: "The best JavaScript training I've ever taken",
    name: "John Smith",
    title: "Tech Lead",
    avatar: "/avatars/john.jpg",
    className: "font-satoshi",
  },
];

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and Node.js",
    link: "https://github.com/yourusername/project-one",
    icon: <FaReact size={24} />,
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "Project Two",
    description: "Full-stack e-commerce platform with real-time features",
    link: "https://github.com/yourusername/project-two",
    icon: <FaShoppingCart size={24} />,
    tags: ["Next.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Project Three",
    description: "Mobile-first social media dashboard",
    link: "https://github.com/yourusername/project-three",
    icon: <FaMobile size={24} />,
    tags: ["React Native", "Firebase", "Redux"],
  },
];
