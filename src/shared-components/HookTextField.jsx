import React from "react";
import { Controller } from "react-hook-form";
import TextField from "./TextField";

const HookTextField = ({
  name,
  control,
  rules,
  defaultValue = "",
  ...textFieldProps
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <TextField
          {...textFieldProps}
          ref={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error?.message}
        />
      )}
    />
  );
};

export default HookTextField;
