import { TaskModel } from "@/model/task.model";
import { PropsWithoutRef } from "react";
import TaskTile from "./TaskTile";

export default function TaskList({
  tasks,
}: PropsWithoutRef<{ tasks: TaskModel[] }>) {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskTile task={task} key={task.id} />
      ))}
    </div>
  );
}
