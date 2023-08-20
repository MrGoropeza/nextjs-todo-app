"use client";

import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRouteGuard } from "../../hooks/route-guard.hook";
import pb from "../../lib/consts/pocketbase.const";

const HomePage = () => {
  const router = useRouter();

  useRouteGuard(
    () => router.push("home"),
    () => {}
  );

  const handleLogin = () =>
    pb
      .collection("users")
      .authWithOAuth2({ provider: "google" })
      .then(() => router.push("home"));

  return (
    <main className="relative h-full w-full">
      <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-700 p-20">
        <p>Bienvenido</p>

        <button
          type="button"
          onClick={handleLogin}
          className="flex items-center gap-2 rounded-md bg-slate-200 p-2 text-black"
        >
          <LogIn />
          Iniciar Sesión
        </button>
      </section>
    </main>
  );
};

export default HomePage;
