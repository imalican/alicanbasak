"use client";

import React from "react";
import { Link } from "@nextui-org/react";
import { Logo } from "@/components/icons";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background/70 backdrop-blur-md py-12">
      <div className="container mx-auto px-4">
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-divider text-center text-default-600">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
