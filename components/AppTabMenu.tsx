import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { MenuItem } from "primereact/menuitem";
import { TabMenu } from "primereact/tabmenu";
import { PropsWithoutRef, useState } from "react";

export default function AppTabMenu({
  tabID,
}: PropsWithoutRef<{ tabID: string }>) {
  const router = useRouter();
  const tabs: MenuItem[] = [
    { id: "home", icon: "pi pi-home", command: () => router.push("/") },
    {
      id: "tasks",
      icon: "pi pi-calendar",
      command: () => router.push("/tasks"),
    },
    {
      id: "settings",
      icon: "pi pi-cog",
      command: () => router.push("/settings"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(
    tabs.findIndex((tab) => tab.id === tabID)
  );

  return (
    <nav className="fixed inset-x-0 bottom-0">
      <div className="relative flex items-center justify-center gap-2 bg-slate-800 pt-2">
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

        <TabMenu model={tabs} activeIndex={activeIndex}></TabMenu>
      </div>
    </nav>
  );
}
