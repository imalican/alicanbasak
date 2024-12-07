"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-100 cursor-pointer",
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-violet-900/20 hover:bg-violet-200 dark:bg-violet-900/2 0 dark:hover:bg-violet-900/50",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-violet-500 dark:!text-violet-400",
              "p-2",
              "border border-default-200 dark:border-default-100",
              "hover:border-violet-500 dark:hover:border-violet-500",
              "hover:shadow-[0_0_10px_rgba(139,92,246,0.3)] dark:hover:shadow-[0_0_10px_rgba(139,92,246,0.3)]",
              "hover:scale-105",
              "transition-all duration-300",
              //
            ],
            classNames?.wrapper
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon
            size={20}
            className="transition-transform duration-300 hover:rotate-45"
          />
        ) : (
          <MoonFilledIcon
            size={20}
            className="transition-transform duration-300 hover:-rotate-12"
          />
        )}
      </div>
    </Component>
  );
};
