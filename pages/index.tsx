import Layout from "@/components/layout";
import TaskList from "@/components/task-list";
import TasksProgress from "@/components/task-progress";
import { getTodayTasks } from "@/lib/tasks";
import { Button } from "primereact/button";

export default function Home() {
  const tasks = getTodayTasks();

  return (
    <Layout>
      <TasksProgress progress={0.3} title="Progreso de hoy"></TasksProgress>

      <TaskList tasks={tasks} />

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
