"use client";

import { FormInputText } from "@/app/components";
import { Button } from "primereact/button";
import { Dispatch, SetStateAction } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Task = {
  title: string;
  description: string;
};

interface TaskFormProps {
  setDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const TaskForm = ({ setDialogOpen }: TaskFormProps) => {
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
        rules={{
          required: { value: true, message: "Campo requerido." },
          minLength: {
            value: 5,
            message: "Debe tener 5 caracteres como mínimo",
          },
        }}
        render={({ field, fieldState }) => (
          <FormInputText
            label="Título"
            placeholder="Título de la tarea"
            field={field}
            fieldState={fieldState}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{ required: { value: true, message: "Campo requerido." } }}
        render={({ field, fieldState }) => (
          <FormInputText
            label="Descripción"
            placeholder="Desc. de la tarea"
            field={field}
            fieldState={fieldState}
          />
        )}
      />

      <div className="mt-2 flex justify-end gap-2">
        <Button
          type="button"
          label="Cancelar"
          severity="danger"
          icon="pi pi-times"
          onClick={() => setDialogOpen(false)}
        />
        <Button
          type="submit"
          label="Crear"
          severity="success"
          icon="pi pi-save"
        />
      </div>
    </form>
  );
};

export default TaskForm;
