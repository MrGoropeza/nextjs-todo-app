import { PropsWithChildren } from "react";
import { RootTabMenu } from "./components";

export const metadata = {
  title: "Inicio",
  description: "Generated by Next.js",
};

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex max-h-full flex-col">
      <section className="grow overflow-auto p-5">{children}</section>
      <RootTabMenu></RootTabMenu>
    </main>
  );
}
