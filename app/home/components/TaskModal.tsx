"use client";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import TaskForm from "./TaskForm";

const TaskModal = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Dialog
        className="w-11/12 sm:w-10/12"
        header="Crear Tarea"
        visible={dialogOpen}
        onHide={() => setDialogOpen(false)}
      >
        <TaskForm></TaskForm>
      </Dialog>

      <div className="absolute inset-x-0 bottom-11 mx-auto max-w-max">
        <Button
          rounded
          icon="pi pi-plus"
          severity="info"
          size="large"
          tooltip="Crear Tarea"
          tooltipOptions={{ position: "top" }}
          onClick={() => setDialogOpen(true)}
        ></Button>
      </div>
    </>
  );
};

export default TaskModal;
