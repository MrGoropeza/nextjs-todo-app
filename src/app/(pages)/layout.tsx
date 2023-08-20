import { Toaster } from "@components/ui/toaster";
import SessionContextProvider from "@context/session.context";
import { ReactNode } from "react";
import ThemeContextProvider from "../context/theme.context";

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContextProvider>
      <SessionContextProvider>
        {children}

        <Toaster />
      </SessionContextProvider>
    </ThemeContextProvider>
  );
};

export default PagesLayout;
