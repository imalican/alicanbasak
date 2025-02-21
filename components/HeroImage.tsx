"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  AWSIcon,
  ExpoIcon,
  FirebaseIcon,
  GraphQLIcon,
  MongoDBIcon,
  NextJsIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "./icons/TechIcons";

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

const zIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const HeroImage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(theme === "dark");
  }, [theme]);

  const getTechIconClass = () => `
    absolute p-3 rounded-lg
    ${mounted ? (isDark ? "bg-gray-800/20 border-gray-700/30" : "bg-white/10 border-gray-200/20") : "bg-white/10 border-gray-200/20"}
    backdrop-blur-md border
    aspect-square w-[48px]
    transform-gpu
  `;

  const DesktopView = () => (
    <div className="relative w-full h-[500px]">
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {techStacks.map((tech: Tech, i: number) => (
            <motion.div
              key={`tech-${i}`}
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
              className={getTechIconClass()}
              initial={{ y: 50 }}
              style={{
                ...desktopPositions[i],
                transform: `rotate(${Math.random() * 4 - 2}deg)`,
                zIndex: zIndexes[i],
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

  const MobileView = () => {
    const getAsymmetricStyle = (index: number) => {
      const patterns = [
        { size: "w-12 h-12", offset: "translate-y-2" },
        { size: "w-12 h-12", offset: "-translate-y-4" },
        { size: "w-12 h-12", offset: "translate-y-0" },
        { size: "w-12 h-12", offset: "translate-y-3" },
        { size: "w-12 h-12", offset: "-translate-y-2" },
        { size: "w-12 h-12", offset: "-translate-y-1" },
        { size: "w-12 h-12", offset: "-translate-y-3" },
      ];

      return patterns[index % patterns.length];
    };

    return (
      <div className="w-full overflow-hidden py-16">
        <div className="relative">
          <motion.div
            animate={{
              x: [0, `-${techStacks.length * 48}px`],
            }}
            className="flex gap-4 will-change-transform"
            style={{
              width: "max-content",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              WebkitBackfaceVisibility: "hidden",
              WebkitPerspective: 1000,
              WebkitTransform: "translate3d(0,0,0)",
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
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
                  } ${size} ${offset} will-change-transform`}
                  style={{
                    WebkitBackfaceVisibility: "hidden",
                    WebkitPerspective: 1000,
                    WebkitTransform: "translate3d(0,0,0)",
                    aspectRatio: "1 / 1",
                  }}
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
