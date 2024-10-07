import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "swiper/css";
import "./globals.css";

import SnackbarProvider from "@/components/context/SnackbarProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/handlers/utils/query";
import ElfaSuspenseBoundary from "@/components/external/boundary/ElfaSuspenseBoundary";
import { cn } from "@/handlers/types/ui/common";
import ElfaErrorBoundary from "@/components/external/boundary/ElfaErrorBoundary";

import AuthProvider from "@/components/context/AuthProvider";
import LighthouseProvider from "@/components/context/LighthouseProvider";

const FONT = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elfa AI",
  description:
    "The go-to product for degen traders looking for actionable alpha amidst crypto noise. Identify trading opportunities and exit signals early, no matter your trading style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(FONT.className)}>
        <NextTopLoader color="#8629D0" showSpinner={false} shadow={false} />
        <ThemeProvider attribute={"class"} forcedTheme="light">
          <ElfaSuspenseBoundary>
            <ElfaErrorBoundary>
              <SnackbarProvider>
                <QueryClientProvider client={queryClient}>
                  <LighthouseProvider>
                    <AuthProvider>{children}</AuthProvider>
                  </LighthouseProvider>
                </QueryClientProvider>
              </SnackbarProvider>
            </ElfaErrorBoundary>
          </ElfaSuspenseBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
