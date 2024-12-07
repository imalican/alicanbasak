"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Button,
} from "@nextui-org/react";
import { Logo } from "@/components/icons";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        relative font-medium text-black dark:text-white no-underline
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left
        ${
          isActive
            ? "after:bg-black dark:after:bg-white after:scale-x-100"
            : "after:bg-black dark:after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        }
      `}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      maxWidth="xl"
      className="bg-background/70 backdrop-blur-md"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="text-3xl tracking-tight font-cabinet font-bold">
            alican.
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/about">About</NavLink>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            className="bg-violet-100 hover:bg-violet-200 dark:bg-violet-900/30 dark:hover:bg-violet-900/50 text-violet-600 dark:text-violet-300 transition-colors [&:not(:hover)]:bg-violet-50 dark:[&:not(:hover)]:bg-violet-900/20 font-bold"
            href="mailto:your@email.com"
            variant="flat"
          >
            <FaEnvelope className="mr-2" />
            Subscribe
          </Button>
        </NavbarItem>
      </NavbarContent>

      <AnimatePresence>
        {isMenuOpen && (
          <NavbarMenu className="top-[var(--navbar-height)] bg-background/70 backdrop-blur-md flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center">
              <nav className="flex flex-col items-center space-y-6">
                <NavLink href="/" isMobile>
                  Home
                </NavLink>
                <NavLink href="/blog" isMobile>
                  Blog
                </NavLink>
                <NavLink href="/about" isMobile>
                  About
                </NavLink>
              </nav>
            </div>
            <div className="flex justify-center gap-8 py-8 border-t border-divider/50 mt-auto">
              <Link
                href="https://github.com/yourusername"
                className="text-foreground/60 hover:text-foreground transition-colors"
                target="_blank"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                className="text-foreground/60 hover:text-foreground transition-colors"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://instagram.com/yourusername"
                className="text-foreground/60 hover:text-foreground transition-colors"
                target="_blank"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="mailto:your@email.com"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <FaEnvelope size={24} />
              </Link>
            </div>
          </NavbarMenu>
        )}
      </AnimatePresence>
    </Navbar>
  );
}
