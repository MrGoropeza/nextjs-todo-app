"use client";

// styles
import "@/styles/globals.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/md-dark-indigo/theme.css";

import { getTodayTasksAsync } from "@/lib/tasks";
import { Button } from "primereact/button";
import { TaskList, TaskModal, TasksProgress } from "./components";

async function App() {
  const tasksResponse = await getTodayTasksAsync();

  return (
    <>
      <TasksProgress progress={50} title="Progreso de hoy" />

      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-xl font-bold">Tareas de hoy</h3>
        <Button label="Ver Todas" text severity="info" />
      </div>

      <TaskList tasks={tasksResponse.tasks} />

      <TaskModal></TaskModal>
    </>
  );
}

export default App;
