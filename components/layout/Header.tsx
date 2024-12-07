"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { ThemeSwitch } from "@/components/theme-switch";
import { SubscribeModal } from "@/components/SubscribeModal";
import { useState } from "react";

const NavLink = ({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      href={href}
      className={`
        relative font-medium text-black dark:text-white no-underline
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left
        ${
          isActive
            ? "after:bg-black dark:after:bg-white after:scale-x-100"
            : "after:bg-black dark:after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        }
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </NextLink>
  );
};

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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  return (
    <>
      <NextUINavbar
        maxWidth="xl"
        className="bg-background/70 backdrop-blur-md"
        position="sticky"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={`sm:hidden transition-transform duration-300 ${
              isMenuOpen ? "hover:rotate-90" : ""
            }`}
          />
          <NavbarBrand>
            <NextLink
              href="/"
              className="text-3xl tracking-tight font-cabinet font-bold"
            >
              alican.
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <NavLink href="/">Home</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/blog">Blog</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/works">Works</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/projects">Projects</NavLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-4">
          <NavbarItem className="sm:flex">
            <Button
              className="
                bg-violet-100 hover:bg-violet-200 dark:bg-violet-900/30 dark:hover:bg-violet-900/50 
                [&:not(:hover)]:bg-violet-50 dark:[&:not(:hover)]:bg-violet-900/20 
                !text-violet-600 dark:!text-violet-300 
                transition-colors 
                font-bold
                h-unit-10 min-w-unit-20 px-4
              "
              onClick={() => setIsSubscribeOpen(true)}
              variant="flat"
            >
              <FaEnvelope className="mr-2" size={18} />
              Subscribe
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="top-[var(--navbar-height)] bg-background/70 backdrop-blur-md flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-10">
              <NavbarMenuItem className="h-14 flex items-center">
                <NavLink
                  href="/"
                  className="text-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </NavbarMenuItem>
              <NavbarMenuItem className="h-14 flex items-center">
                <NavLink
                  href="/blog"
                  className="text-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </NavLink>
              </NavbarMenuItem>
              <NavbarMenuItem className="h-14 flex items-center">
                <NavLink
                  href="/works"
                  className="text-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Works
                </NavLink>
              </NavbarMenuItem>
              <NavbarMenuItem className="h-14 flex items-center">
                <NavLink
                  href="/projects"
                  className="text-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </NavLink>
              </NavbarMenuItem>
            </nav>
          </div>
          <div className="flex flex-col gap-6 items-center py-8 border-t border-divider/50 mt-auto">
            <div className="flex justify-center gap-4">
              <SocialIcon
                href="https://github.com/yourusername"
                icon={FaGithub}
              />
              <SocialIcon
                href="https://linkedin.com/in/yourusername"
                icon={FaLinkedin}
              />
              <SocialIcon
                href="https://instagram.com/yourusername"
                icon={FaInstagram}
              />
            </div>
          </div>
        </NavbarMenu>
      </NextUINavbar>

      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        className="sm:mx-auto sm:max-w-md mx-4"
      />
    </>
  );
}
