import { PropsWithChildren } from "react";
import RootTabMenu from "./components/RootTabMenu";

export const metadata = {
  title: "Inicio",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <section className="relative p-5 pb-20">{children}</section>
        <RootTabMenu></RootTabMenu>
      </body>
    </html>
  );
}