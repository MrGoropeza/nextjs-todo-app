import { classNames } from "primereact/utils";
import { ReactNode } from "react";

interface FormFloatLabelProps {
  children: ReactNode;
  fieldName: string;
  label: string;
  invalid: boolean;
}

const FormFloatLabel = ({
  children,
  fieldName,
  label,
  invalid,
}: FormFloatLabelProps) => {
  return (
    <span className="p-float-label mt-6">
      {children}
      <label htmlFor={fieldName} className={classNames({ "p-error": invalid })}>
        {label}
      </label>
    </span>
  );
};

export default FormFloatLabel;
