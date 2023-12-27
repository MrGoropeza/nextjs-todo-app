import { ThemeProvider } from "@/components/context/Theme.context";
import { ThemeToggle } from "@/components/project/ThemeToggle";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Do App",
  description: "To Do App with Next.js 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
