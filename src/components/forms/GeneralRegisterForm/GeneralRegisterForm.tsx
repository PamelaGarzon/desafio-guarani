import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { CompanyRegisterForm } from "../CompanyRegisterForm";
import { PersonRegisterForm } from "../PersonRegisterForm";
import { formatPhoneNumber } from "../../../helpers/utils/formatters.utils";
import { TextField } from "../../TextField";

export const GeneralRegisterForm = () => {
  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const [personType] = watch(["personType"]);

  return (
    <>
      <FormControl component="fieldset">
        <Controller
          name="personType"
          control={control}
          render={({ field }) => (
            <RadioGroup
              row
              {...field}
              onChange={(e) =>
                setValue("personType", e.target.value as "fisica" | "juridica")
              }
            >
              <FormControlLabel
                value="fisica"
                control={<Radio />}
                label="Pessoa Física"
              />
              <FormControlLabel
                value="juridica"
                control={<Radio />}
                label="Pessoa Jurídica"
              />
            </RadioGroup>
          )}
        />
      </FormControl>

      {personType?.includes("juridica") && <CompanyRegisterForm />}
      {personType?.includes("fisica") && <PersonRegisterForm />}

      <FormControl>
        <TextField
          {...register("email")}
          label="E-mail"
          error={!!errors.email}
          helperText={errors.email?.message as string}
        />
      </FormControl>

      <FormControl>
        <TextField
          {...register("phone")}
          label="Telefone"
          type="text"
          maxLength={15}
          placeholder="(XX) XXXX-XXXX ou (XX) 9XXXX-XXXX"
          error={!!errors.phone}
          helperText={errors.phone?.message as string}
          onChange={(event) => {
            setValue("phone", formatPhoneNumber(event.target.value));
            clearErrors("phone");
          }}
        />
      </FormControl>
    </>
  );
};
