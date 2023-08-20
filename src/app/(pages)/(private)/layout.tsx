"use client";

import SessionContextProvider from "@context/session.context";
import { ReactNode } from "react";
import { useRouteGuard } from "../../hooks/route-guard.hook";
import NavBar from "./components/NavBar/NavBar";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  useRouteGuard(
    () => {},
    ({ router }) => router.push("/"),
  );

  return (
    <SessionContextProvider>
      <div className="flex h-full flex-col">
        <NavBar />

        <main className="grow p-4">{children}</main>

        <footer className="flex items-center justify-center p-4">
          Todo App by MrGoropeza
        </footer>
      </div>
    </SessionContextProvider>
  );
};

export default PrivateLayout;
