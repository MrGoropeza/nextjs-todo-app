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
