import SessionContextProvider from "@context/session.context";
import { ReactNode } from "react";
import ThemeContextProvider from "../context/theme.context";

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContextProvider>
      <SessionContextProvider>{children}</SessionContextProvider>
    </ThemeContextProvider>
  );
};

export default PagesLayout;
