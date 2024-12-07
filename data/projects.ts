import { FaReact, FaShoppingCart, FaMobile } from "react-icons/fa";
import { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  link: string;
  icon: IconType;
  iconColor: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A modern web application built with React and Node.js",
    link: "https://github.com/yourusername/project-one",
    icon: FaReact,
    iconColor: "text-cyan-500",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "Project Two",
    description: "Full-stack e-commerce platform with real-time features",
    link: "https://github.com/yourusername/project-two",
    icon: FaShoppingCart,
    iconColor: "text-violet-500",
    tags: ["Next.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Project Three",
    description: "Mobile-first social media dashboard",
    link: "https://github.com/yourusername/project-three",
    icon: FaMobile,
    iconColor: "text-indigo-500",
    tags: ["React Native", "Firebase", "Redux"],
  },
];
