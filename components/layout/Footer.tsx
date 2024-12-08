"use client";

import { Link } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <Link
    href={href}
    className="
      p-2 rounded-lg
      bg-violet-50 hover:bg-violet-100 dark:bg-violet-900/20 dark:hover:bg-violet-900/30
      [&:not(:hover)]:bg-violet-50 dark:[&:not(:hover)]:bg-violet-900/20
      text-violet-600 dark:text-violet-300
      transition-colors
      flex items-center justify-center
    "
    target="_blank"
  >
    <Icon size={20} />
  </Link>
);

export default function Footer() {
  return (
    <footer className="w-full border-t border-default-200 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex gap-4">
          <SocialIcon href="https://github.com/imalican" icon={FaGithub} />
          <SocialIcon
            href="https://www.linkedin.com/in/alicanbasak/"
            icon={FaLinkedin}
          />
          <SocialIcon
            href="https://instagram.com/alicanbasak"
            icon={FaInstagram}
          />
        </div>

        <div className="text-center space-y-2">
          <p className="text-default-600 text-md">
            © {new Date().getFullYear()} Alican Basak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
