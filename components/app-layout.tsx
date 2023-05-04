import Head from "next/head";
import { PropsWithChildren } from "react";
import AppTabMenu from "./app-tabmenu";

export default function AppLayout({
  children,
  title,
  tabID,
}: PropsWithChildren<{ tabID: string; title?: string }>) {
  return (
    <main>
      <Head>
        <title>{title}</title>
      </Head>

      <section className="relative p-5 pb-20">{children}</section>

      <AppTabMenu tabID={tabID}></AppTabMenu>
    </main>
  );
}
