"use client";

import { FormInputText } from "@/app/components";
import { Button } from "primereact/button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Task = {
  title: string;
  description: string;
};

const TaskForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>();
  const onSubmit: SubmitHandler<Task> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        rules={{ required: true, minLength: 5 }}
        render={({ field, fieldState }) => (
          <FormInputText
            label="Título"
            placeholder="Título de la tarea"
            field={field}
            fieldState={fieldState}
          />
        )}
      ></Controller>

      <Controller
        name="description"
        control={control}
        rules={{ required: true, min: 0 }}
        render={({ field, fieldState }) => (
          <FormInputText
            label="Descripción"
            placeholder="Desc. de la tarea"
            field={field}
            fieldState={fieldState}
          />
        )}
      ></Controller>

      <div className="mt-2 flex justify-end">
        <Button type="submit" label="Crear" />
      </div>
    </form>
  );
};

export default TaskForm;
