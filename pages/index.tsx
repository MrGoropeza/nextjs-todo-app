import { AppLayout, TaskList, TasksProgress } from "@/components";
import { getTodayTasks } from "@/lib/tasks";
import { Button } from "primereact/button";

export default function Home() {
  const tasks = getTodayTasks();

  return (
    <AppLayout title="Inicio" tabID="home">
      <TasksProgress progress={50} title="Progreso de hoy" />

      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-xl font-bold">Tareas de hoy</h3>
        <Button label="Ver Todas" text severity="info" />
      </div>

      <TaskList tasks={tasks} />
    </AppLayout>
  );
}
