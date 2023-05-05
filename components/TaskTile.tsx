import { TaskModel } from "@/model/task.model";
import { Button } from "primereact/button";
import { PropsWithoutRef } from "react";

export default function TaskTile({
  task,
}: PropsWithoutRef<{ task: TaskModel }>) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-slate-600 p-2">
      {/* <Image
        className="rounded-lg bg-black p-1"
        src="/images/todo-icon.jpg"
        alt="todo-icon"
        width={64}
        height={64}
      /> */}
      <div className="flex grow flex-col justify-center">
        <p className="font-bold">{task.title}</p>
        <p className="font-extralight">{task.description}</p>
      </div>
      <Button
        icon="pi pi-angle-right"
        aria-label="Ver Detalles de Tarea"
        text
        rounded
      ></Button>
    </div>
  );
}
