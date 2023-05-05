import { TaskModel } from "@/model/task.model";

export function getTodayTasks(): TaskModel[] {
  return new Array<TaskModel>(10)
    .fill({
      id: "",
      title: "Title",
      description: "Description",
    } as TaskModel)
    .map((task, index) => ({
      id: `${index + 1}`,
      title: `${task.title} ${index + 1}`,
      description: `${task.description} ${index + 1}`,
    }));
}

export async function getTodayTasksAsync(): Promise<{ tasks: TaskModel[] }> {
  const data = await fetch(
    "https://run.mocky.io/v3/0272767d-8e20-464d-af36-599f7e974de1"
  );
  return data.json();
}
