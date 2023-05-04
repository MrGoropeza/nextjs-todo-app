import { MenuItem } from "primereact/menuitem";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  const items: MenuItem[] = [{ label: "Home", icon: "pi pi-fw pi-home" }];

  return (
    <main className="relative flex h-full w-full flex-col">
      {/* <Menubar model={items}></Menubar> */}

      <section className="relative grow p-5">{children}</section>
    </main>
  );
}
