"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { SubscribeModal } from "@/components/SubscribeModal";
import { ThemeSwitch } from "@/components/theme-switch";

const NavLink = ({
  href,
  children,
  className,
  onClick,
  target,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      className={`
        relative font-medium text-lg text-black dark:text-white no-underline
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left
        ${
          isActive
            ? "after:bg-black dark:after:bg-white after:scale-x-100"
            : "after:bg-black dark:after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        }
        ${className}
      `}
      href={href}
      target={target}
      onClick={onClick}
    >
      {children}
    </NextLink>
  );
};

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <Link
    className="
      p-2 rounded-lg
      bg-violet-50 hover:bg-violet-100 dark:bg-violet-900/20 dark:hover:bg-violet-900/30
      [&:not(:hover)]:bg-violet-50 dark:[&:not(:hover)]:bg-violet-900/20
      text-violet-600 dark:text-violet-300
      transition-colors
      flex items-center justify-center
    "
    href={href}
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
        className="bg-background/70 backdrop-blur-md"
        isMenuOpen={isMenuOpen}
        maxWidth="xl"
        position="sticky"
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
              className="text-3xl tracking-tight font-cabinet font-bold"
              href="/"
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
            <NavLink href="https://medium.com/@alicanbasak" target="_blank">
              Blog
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/works">Works</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="/projects">Projects</NavLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="gap-4" justify="end">
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
              variant="flat"
              onClick={() => setIsSubscribeOpen(true)}
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
                  className="text-2xl"
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </NavbarMenuItem>
              <NavbarMenuItem className="h-14 flex items-center">
                <NavLink
                  className="text-2xl"
                  href="/blog"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </NavLink>
              </NavbarMenuItem>
              <NavbarMenuItem className="h-14 flex items-center">
                <NavLink
                  className="text-2xl"
                  href="/works"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Works
                </NavLink>
              </NavbarMenuItem>
              <NavbarMenuItem className="h-14 flex items-center">
                <NavLink
                  className="text-2xl"
                  href="/projects"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </NavLink>
              </NavbarMenuItem>
            </nav>
          </div>
          <div className="flex flex-col gap-6 items-center py-8 border-t border-divider/50 mt-auto">
            <div className="flex justify-center gap-4">
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
          </div>
        </NavbarMenu>
      </NextUINavbar>

      <SubscribeModal
        className="sm:mx-auto sm:max-w-md mx-4"
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />
    </>
  );
}
