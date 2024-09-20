import { forwardRef } from "react";
import {
  TextField as BaseTextField,
  TextFieldProps as BaseTextFieldProps,
} from "@mui/material";

type TextFieldProps = BaseTextFieldProps & {
  maxLength?: number;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return (
      <BaseTextField
        {...props}
        inputRef={ref}
        size="small"
        inputProps={{ maxLength: props.maxLength }}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />
    );
  }
);
