import { InputText } from "primereact/inputtext";

const TaskForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="p-float-label mt-6">
        <InputText
          id="title"
          aria-describedby="title-help"
          className="p-invalid"
        />
        <label htmlFor="title">Título</label>
      </span>
      <small id="title-help" className="text-red-500">
        Título requerido.
      </small>
    </div>
  );
};

export default TaskForm;
