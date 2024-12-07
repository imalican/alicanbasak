"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

export function Providers({
  children,
  themeProps,
}: {
  children: React.ReactNode;
  themeProps?: any;
}) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <main className="font-satoshi">{children}</main>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
