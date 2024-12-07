"use client";

import { Link } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { memo } from "react";

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/yourusername",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "mailto:your@email.com",
    icon: FaEnvelope,
    label: "Email",
  },
];

const FooterComponent = () => {
  return (
    <footer className="w-full border-t border-default-200 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative p-2 rounded-lg border border-default-200 dark:border-default-100
                hover:border-violet-500 dark:hover:border-violet-500
                transition-colors"
              target="_blank"
              aria-label={link.label}
            >
              <link.icon
                size={20}
                className="text-default-500 group-hover:text-violet-500 transition-colors"
              />
            </Link>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-default-600 text-md">
            © 2024 Alican Basak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(FooterComponent);
