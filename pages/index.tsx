import AppLayout from "@/components/app-layout";
import TaskList from "@/components/task-list";
import TasksProgress from "@/components/task-progress";
import { getTodayTasks } from "@/lib/tasks";
import { Button } from "primereact/button";

export default function Home() {
  const tasks = getTodayTasks();

  return (
    <AppLayout title="Inicio" tabID="home">
      <TasksProgress progress={50} title="Progreso de hoy"></TasksProgress>

      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-xl font-bold">Tareas de hoy</h3>
        <Button label="Ver Todas" text severity="info" />
      </div>

      <TaskList tasks={tasks} />
    </AppLayout>
  );
}
