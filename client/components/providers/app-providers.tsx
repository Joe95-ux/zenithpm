"use client";
import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { Auth0Provider } from '@auth0/nextjs-auth0';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import NexTopLoader from "nextjs-toploader";
export function AppProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <NexTopLoader color="#10b981" showSpinner={false}/>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Auth0Provider>
          {children}
        </Auth0Provider>
        
      </ThemeProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}
