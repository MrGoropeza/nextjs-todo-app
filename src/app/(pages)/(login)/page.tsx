"use client";

import { Button } from "@components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Progress } from "@components/ui/progress";
import { useToast } from "@components/ui/use-toast";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRouteGuard } from "../../hooks/route-guard.hook";
import pb from "../../lib/consts/pocketbase.const";

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  useRouteGuard(
    () => router.push("home"),
    () => {},
  );

  const handleLogin = () =>
    pb
      .collection("users")
      .authWithOAuth2({ provider: "google" })
      .then(() => {
        router.push("home");
        setLoading(true);
      })
      .catch(() =>
        toast({
          title: "Error al iniciar sesión.",
          description: "Ocurrió un error. Intentá de nuevo.",
          variant: "destructive",
        }),
      );

  return (
    <main className="relative h-full w-full">
      <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-slate-700">
        {loading && <Progress indeterminate className="h-1" />}

        <CardHeader>
          <CardTitle>Bienvenido</CardTitle>
          <CardDescription>Iniciá sesión con Google</CardDescription>
        </CardHeader>

        <CardFooter>
          <Button
            type="button"
            className="w-full gap-2"
            onClick={handleLogin}
            disabled={loading}
          >
            Google
            <LogIn />
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default HomePage;
