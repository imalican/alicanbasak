"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  NodeIcon,
  TailwindIcon,
  MongoDBIcon,
  FirebaseIcon,
  ReduxIcon,
  GraphQLIcon,
  AWSIcon,
  ReactNativeIcon,
  PythonIcon,
  ExpoIcon,
} from "./icons/TechIcons";
import { useTheme } from "next-themes";

interface Tech {
  icon: JSX.Element;
}

const techStacks = [
  { icon: <TypeScriptIcon /> },
  { icon: <ReactIcon /> },
  { icon: <NextJsIcon /> },
  { icon: <NodeIcon /> },
  { icon: <PythonIcon /> },
  { icon: <TailwindIcon /> },
  { icon: <MongoDBIcon /> },
  { icon: <FirebaseIcon /> },
  { icon: <ReduxIcon /> },
  { icon: <GraphQLIcon /> },
  { icon: <AWSIcon /> },
  { icon: <ExpoIcon /> },
];

export const HeroImage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Masaüstü görünümü
  const DesktopView = () => (
    <div className="relative w-full h-[500px]">
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          {techStacks.map((tech: Tech, i: number) => (
            <motion.div
              key={`tech-${i}`}
              className={`absolute p-3 rounded-lg ${
                isDark ? "bg-gray-800/20" : "bg-white/10"
              } backdrop-blur-md border ${
                isDark ? "border-gray-700/30" : "border-gray-200/20"
              } aspect-square w-[48px]`}
              style={{
                ...desktopPositions[i],
                transform: `rotate(${Math.random() * 4 - 2}deg)`,
                zIndex: Math.floor(Math.random() * 10),
              }}
              initial={{ y: 50 }}
              animate={{
                y: [
                  -3 - Math.random() * 4,
                  3 + Math.random() * 4,
                  -3 - Math.random() * 4,
                ],
                x: [
                  -2 - Math.random() * 3,
                  2 + Math.random() * 3,
                  -2 - Math.random() * 3,
                ],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              <div className="flex items-center justify-center h-full">
                {tech.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );

  // Mobil görünümü - Farklı boyutlarda ikonlar ve yavaş sonsuz loop
  const MobileView = () => {
    const getAsymmetricStyle = (index: number) => {
      const patterns = [
        { size: "w-[48px]", offset: "translate-y-0" }, // Normal
        { size: "w-[48px]", offset: "-translate-y-4" }, // Yukarıda
        { size: "w-[48px]", offset: "translate-y-6" }, // Aşağıda
        { size: "w-[48px]", offset: "translate-y-2" }, // Biraz aşağıda
        { size: "w-[48px]", offset: "-translate-y-2" }, // Biraz yukarıda
      ];
      return patterns[index % patterns.length];
    };

    return (
      <div className="w-full overflow-hidden py-16">
        <div className="relative">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, `-${techStacks.length * 48}px`],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            style={{
              width: "max-content",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            {[...techStacks, ...techStacks, ...techStacks].map((tech, i) => {
              const { size, offset } = getAsymmetricStyle(i);
              return (
                <motion.div
                  key={`tech-mobile-${i}`}
                  className={`flex-shrink-0 p-3 rounded-lg ${
                    isDark ? "bg-gray-800/20" : "bg-white/10"
                  } backdrop-blur-md border ${
                    isDark ? "border-gray-700/30" : "border-gray-200/20"
                  } aspect-square ${size} ${offset}`}
                >
                  <div className="flex items-center justify-center h-full">
                    {tech.icon}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="hidden md:block">
        <DesktopView />
      </div>
      <div className="block md:hidden">
        <MobileView />
      </div>
    </>
  );
};

const desktopPositions = [
  { left: "5%", top: "10%" },
  { left: "35%", top: "8%" },
  { left: "65%", top: "12%" },
  { left: "15%", top: "45%" },
  { left: "45%", top: "35%" },
  { left: "75%", top: "45%" },
  { left: "25%", top: "75%" },
  { left: "50%", top: "65%" },
  { left: "80%", top: "70%" },
  { left: "60%", top: "85%" },
  { left: "85%", top: "25%" },
  { left: "40%", top: "90%" },
];
