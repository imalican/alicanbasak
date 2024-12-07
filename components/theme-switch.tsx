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
          "px-px cursor-pointer",
          "!bg-transparent data-[selected=true]:!bg-transparent",
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
              "rounded-lg",
              "flex items-center justify-center",
              "p-2",
              "!bg-violet-100 hover:!bg-violet-200 dark:!bg-violet-900/30 dark:hover:!bg-violet-900/50",
              "[&:not(:hover)]:!bg-violet-50 dark:[&:not(:hover)]:!bg-violet-900/20",
              "transition-colors",
              "font-bold",
              "data-[selected=true]:!bg-violet-100 data-[selected=true]:hover:!bg-violet-200",
              "dark:data-[selected=true]:!bg-violet-900/30 dark:data-[selected=true]:hover:!bg-violet-900/50",
              "group-data-[selected=true]:!bg-violet-100 group-data-[selected=true]:hover:!bg-violet-200",
              "dark:group-data-[selected=true]:!bg-violet-900/30 dark:group-data-[selected=true]:hover:!bg-violet-900/50",
            ],
            classNames?.wrapper
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon
            size={20}
            className="text-violet-600 hover:text-violet-600 dark:text-violet-300 dark:hover:text-violet-300 transition-transform duration-300 hover:rotate-45"
          />
        ) : (
          <MoonFilledIcon
            size={20}
            className="text-violet-600 hover:text-violet-600 dark:text-violet-300 dark:hover:text-violet-300 transition-transform duration-300 hover:-rotate-12"
          />
        )}
      </div>
    </Component>
  );
};
