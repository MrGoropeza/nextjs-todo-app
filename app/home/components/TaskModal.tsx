"use client";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

const TaskModal = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Dialog
        header="Header"
        visible={dialogOpen}
        onHide={() => setDialogOpen(false)}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>

      <div className="absolute inset-x-0 bottom-11 mx-auto max-w-max">
        <Button
          rounded
          icon="pi pi-plus"
          severity="info"
          size="large"
          tooltip="Crear Tarea"
          tooltipOptions={{ position: "top" }}
          onClick={() => {
            setDialogOpen(true);
          }}
        ></Button>
      </div>
    </>
  );
};

export default TaskModal;
