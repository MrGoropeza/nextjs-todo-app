import { ReactNode } from "react";
import ThemeContextProvider from "../context/theme.context";

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default PagesLayout;
