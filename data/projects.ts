import { IconType } from "react-icons";
import { FaChartPie, FaServer, FaSpotify } from "react-icons/fa";

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  icon: IconType;
  iconColor: string;
  category: string;
  tags: string[];
  features: string[];
  status: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Express Guardian",
    description:
      "A secure and scalable Express.js boilerplate with comprehensive monitoring and security features. Includes JWT authentication, RBAC, rate limiting, performance metrics, and more.",
    image: "/projects/express-guardian.png",
    link: "https://github.com/imalican/express-guardian",
    github: "https://github.com/imalican/express-guardian",
    icon: FaServer,
    iconColor: "text-violet-500",
    category: "Backend Development",
    tags: [
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "JWT",
      "Security",
      "Monitoring",
      "Docker",
      "CI/CD",
    ],
    features: [
      "JWT based authentication with refresh tokens",
      "Role based authorization (RBAC)",
      "Rate limiting with Redis",
      "Helmet security headers",
      "Request/Response logging",
      "Performance metrics",
      "Health check endpoint",
      "Docker support",
      "Swagger documentation",
      "Automated testing",
    ],
    status: "Active Development",
    year: "2024",
  },
  {
    id: 2,
    title: "Next.js Admin Dashboard",
    description:
      "A modern admin dashboard built with Next.js 13+ and Radix UI components, providing a robust and accessible interface for administrative tasks. Features include responsive design, form validation, and TypeScript support.",
    image: "/projects/next-admin.png",
    link: "https://next-admin-seven-azure.vercel.app",
    github: "https://github.com/imalican/next-admin",
    icon: FaChartPie,
    iconColor: "text-violet-500",
    category: "Frontend Development",
    tags: [
      "Next.js",
      "TypeScript",
      "Radix UI",
      "React Hook Form",
      "Tailwind CSS",
      "Accessibility",
    ],
    features: [
      "Modern UI components using Radix UI",
      "Fully responsive design",
      "Accessible components out of the box",
      "Form validation with React Hook Form",
      "TypeScript support",
      "App Router implementation",
      "Dark mode support",
      "Performance optimized",
    ],
    status: "Active Development",
    year: "2024",
  },
  {
    id: 3,
    title: "Spotify Cross Playlist Cleaner",
    description:
      "A Python application that helps manage Spotify playlists by identifying and removing duplicate tracks across multiple playlists. Features secure authentication, pagination handling, and an intuitive interface for managing duplicates.",
    image: "/projects/spotify-cleaner.png",
    link: "https://github.com/imalican/spotify-cross-playlist-cleaner",
    github: "https://github.com/imalican/spotify-cross-playlist-cleaner",
    icon: FaSpotify,
    iconColor: "text-violet-500",
    category: "Automation Tool",
    tags: [
      "Python",
      "Spotify API",
      "OAuth2",
      "CLI",
      "Automation",
      "Data Management",
    ],
    features: [
      "Lists all Spotify playlists",
      "Finds duplicate tracks across playlists",
      "Selective duplicate management",
      "Handles large playlist pagination",
      "Secure OAuth authentication",
      "Environment-based configuration",
      "Cross-platform compatibility",
      "User-friendly CLI interface",
    ],
    status: "Active Development",
    year: "2024",
  },
];
