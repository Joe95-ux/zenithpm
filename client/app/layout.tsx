import { Nunito } from 'next/font/google'
import type { Metadata } from "next";
import { AppProviders } from "@/components/providers/app-providers";
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
        <AppProviders>
            {children}
          </AppProviders>
      </body>
    </html>
  );
}
