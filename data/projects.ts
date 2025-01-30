import { FaReact, FaShoppingCart, FaMobile, FaCode, FaDatabase, FaRobot, FaGamepad } from "react-icons/fa";
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
    description: "A modern web application built with React and Node.js, featuring real-time updates and responsive design",
    link: "https://github.com/imalican/project-one",
    icon: FaReact,
    iconColor: "text-violet-500",
    tags: ["React", "Node.js", "TypeScript"],
    },
    {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with real-time features, cart management, and payment integration",
    link: "https://github.com/imalican/project-two",
    icon: FaShoppingCart,
    iconColor: "text-violet-500",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    },
    {
    title: "Social Dashboard",
    description: "Mobile-first social media dashboard with analytics and user engagement tracking",
    link: "https://github.com/imalican/project-three",
    icon: FaMobile,
    iconColor: "text-violet-500",
    tags: ["React Native", "Firebase", "Redux"],
    },
    {
    title: "Code Generator AI",
    description: "AI-powered code generation tool that helps developers write better code faster",
    link: "https://github.com/imalican/code-gen",
    icon: FaCode,
    iconColor: "text-violet-500",
    tags: ["Python", "TensorFlow", "FastAPI"],
    },
    {
    title: "Data Analytics Platform",
    description: "Enterprise-grade data analytics platform with interactive visualizations",
    link: "https://github.com/imalican/data-analytics",
    icon: FaDatabase,
    iconColor: "text-violet-500",
    tags: ["Vue.js", "D3.js", "PostgreSQL"],
    },
    {
    title: "AI Chat Assistant",
    description: "Intelligent chatbot platform with natural language processing capabilities",
    link: "https://github.com/imalican/chat-assistant",
    icon: FaRobot,
    iconColor: "text-violet-500",
    tags: ["Python", "NLP", "Machine Learning"],
    },
    {
    title: "Game Development Kit",
    description: "A comprehensive toolkit for building 2D games with modern web technologies",
    link: "https://github.com/imalican/game-dev-kit",
    icon: FaGamepad,
    iconColor: "text-violet-500",
    tags: ["JavaScript", "WebGL", "Canvas"],
  },
];
