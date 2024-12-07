"use client";

import { useTheme } from "next-themes";
import { Button } from "@nextui-org/button";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      variant="light"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
