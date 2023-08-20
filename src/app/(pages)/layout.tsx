import { Toaster } from "@components/ui/toaster";
import { ReactNode } from "react";
import ThemeContextProvider from "../context/theme.context";

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContextProvider>
      {children}

      <Toaster />
    </ThemeContextProvider>
  );
};

export default PagesLayout;
