"use client";
import noImage from "../../../../public/images/no-image-profile.png";

import { LogOut } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { useRouteGuard } from "../../hooks/route-guard.hook";
import { useSession } from "../../hooks/session.hook";
import pb from "../../lib/consts/pocketbase.const";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const session = useSession();

  useRouteGuard(
    () => {},
    ({ router }) => router.push("/")
  );

  const handleLogout = () => pb.authStore.clear();

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-4">
          <Image
            src={session && session.avatar ? session.avatar : noImage.src}
            alt={session && session.name ? session.name : "email"}
            width={48}
            height={48}
            className="aspect-square rounded-full object-cover"
          />
          <p>{session?.name}</p>
        </div>
        <button type="button" onClick={handleLogout}>
          <LogOut />
        </button>
      </header>

      <main className="grow p-4">{children}</main>

      <footer className="flex items-center justify-center p-4">
        Todo App by MrGoropeza
      </footer>
    </div>
  );
};

export default PrivateLayout;
