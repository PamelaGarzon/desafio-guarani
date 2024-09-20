import { FormControl } from "@mui/material";
import { usePersonRegisterForm } from "./hooks/usePersonRegisterForm";
import { TextField } from "../../TextField";
import { useEffect } from "react";

export const PersonRegisterForm = () => {
  const { handleApplyCpfMask, methodsForm } = usePersonRegisterForm();
  const {
    register,
    formState: { errors },
    watch,
    trigger,
  } = methodsForm;

  const [cpf] = watch(["cpf"]);

  useEffect(() => {
    if (cpf) {
      trigger("cpf");
    }
  }, [cpf]);

  return (
    <>
      <FormControl>
        <TextField
          {...register("cpf")}
          label="CPF"
          type="text"
          maxLength={11}
          error={!!errors.cpf}
          helperText={errors.cpf?.message as string}
          onChange={(event) => {
            const { value } = event.target;
            handleApplyCpfMask(value);
          }}
        />
      </FormControl>

      <FormControl>
        <TextField
          {...register("fullName")}
          label="Nome Completo"
          error={!!errors.fullName}
          helperText={errors.fullName?.message as string}
        />
      </FormControl>
    </>
  );
};
