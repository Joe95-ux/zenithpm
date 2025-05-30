import { Nunito } from 'next/font/google'
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import {Toaster} from "sonner";
import "./globals.css";

const font = Nunito({ 
  subsets: ['latin'], 
})

export const metadata: Metadata = {
  title: "Project management | Zenithpm",
  description: "Project manage app for solopreneurs and small businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Toaster richColors closeButton position="top-right" />
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
