"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { HeroImage } from "@/components/HeroImage";
import { title } from "@/components/primitives";

export const HeroSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="relative w-full bg-black/5 dark:bg-black/50 backdrop-blur-3xl py-8 overflow-hidden rounded-3xl mt-4">
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

        <div className="relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            {/* Content */}
            <div className="flex-1 space-y-6 px-4 md:px-8 lg:px-12">
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
                  className="font-semibold bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-satoshi"
                  href="/works"
                  size="lg"
                >
                  View My Works
                </Button>
                <Button
                  as={Link}
                  className="font-semibold font-satoshi"
                  href="/blog"
                  size="lg"
                  variant="bordered"
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
      </div>
    </section>
  );
};
