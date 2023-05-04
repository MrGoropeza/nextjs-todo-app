import Layout from "@/components/layout";
import { Button } from "primereact/button";

export default function Home() {
  return (
    <Layout>
      <div className="absolute bottom-3 left-1/2">
        <Button
          rounded
          icon="pi pi-plus"
          size="large"
          tooltip="Crear Tarea"
          tooltipOptions={{ position: "top" }}
        ></Button>
      </div>
    </Layout>
  );
}
