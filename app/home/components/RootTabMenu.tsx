"use client";

import { useRouter } from "next/navigation";
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
    <nav className="flex items-center justify-center gap-2 bg-slate-800 pt-2">
      <TabMenu model={tabs} />
    </nav>
  );
}
