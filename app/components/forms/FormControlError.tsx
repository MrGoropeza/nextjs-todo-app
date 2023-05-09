import { classNames } from "primereact/utils";
import { FieldError } from "react-hook-form";

interface FormControlErrorProps {
  fieldName: string;
  invalid: boolean;
  error?: FieldError;
}

const FormControlError = ({
  fieldName,
  invalid,
  error,
}: FormControlErrorProps) => {
  return (
    <small
      id={`${fieldName}-help`}
      className={classNames({ "p-error": invalid })}
    >
      {error?.message}
    </small>
  );
};

export default FormControlError;
