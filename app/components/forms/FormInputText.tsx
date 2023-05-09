"use client";

import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { FormControlError, FormFloatLabel } from ".";

interface FormInputTextProps {
  label: string;
  placeholder: string;
  field: ControllerRenderProps<any, any>;
  fieldState: ControllerFieldState;
}

const FormInputText = ({
  field,
  fieldState,
  label,
  placeholder,
}: FormInputTextProps) => {
  return (
    <div className="flex flex-col gap-2">
      <FormFloatLabel
        fieldName={field.name}
        invalid={fieldState.invalid}
        label={label}
      >
        <InputText
          id={field.name}
          aria-describedby={`${field.name}-help`}
          placeholder={placeholder}
          className={classNames({
            "p-invalid": fieldState.invalid,
            "w-full": true,
          })}
          onBlur={() => field.onBlur()}
          onChange={(e) => field.onChange(e.target.value)}
        />
      </FormFloatLabel>

      <FormControlError
        fieldName={field.name}
        invalid={fieldState.invalid}
        error={fieldState.error}
      />
    </div>
  );
};

export default FormInputText;
