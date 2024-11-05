"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [querClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={querClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
