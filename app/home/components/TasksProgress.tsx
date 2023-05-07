import { PropsWithoutRef } from "react";

export default function TasksProgress({
  progress,
  title,
}: PropsWithoutRef<{ progress: number; title: string }>) {
  const percentage = progressToPercentage(progress);

  return (
    <div className="mx-10 my-4 rounded-xl bg-gradient-to-r from-blue-400 to-blue-700 p-4">
      <p className="mb-2 text-2xl font-bold">{title}</p>

      <div className="flex justify-between">
        <p>Progreso</p>
        <p>{percentage}%</p>
      </div>

      <div className="relative h-2 w-full overflow-hidden rounded-lg bg-slate-200/50">
        <div
          className="absolute h-2 bg-slate-200"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

const progressToPercentage = (progress: number) => {
  if (progress > 100) return 100;
  if (progress < 0) return 0;
  return progress;
};
