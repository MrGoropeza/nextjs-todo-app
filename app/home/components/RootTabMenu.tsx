"use client";

import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { MenuItem } from "primereact/menuitem";
import { TabMenu } from "primereact/tabmenu";

export default function RootTabMenu() {
  const router = useRouter();
  const tabs: MenuItem[] = [
    {
      id: "home",
      icon: "pi pi-home",
      command: () => router.push("/"),
    },
    {
      id: "tasks",
      icon: "pi pi-calendar",
      url: "/tasks",
      command: () => router.push("/tasks"),
    },
    {
      id: "settings",
      icon: "pi pi-cog",
      command: () => router.push("/settings"),
    },
  ];

  return (
    <nav className="relative flex items-center justify-center gap-2 bg-slate-800 pt-2">
      <div className="absolute bottom-11 mx-auto max-w-max">
        <Button
          rounded
          icon="pi pi-plus"
          severity="info"
          size="large"
          tooltip="Crear Tarea"
          tooltipOptions={{ position: "top" }}
        ></Button>
      </div>

      <TabMenu model={tabs}></TabMenu>
    </nav>
  );
}
