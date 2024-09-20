import { FormControl } from "@mui/material";
import { useCompanyRegisterForm } from "./hooks";
import { TextField } from "../../TextField";
import { useEffect } from "react";

export const CompanyRegisterForm = () => {
  const {
    methodsForm,
    handleManageFieldsByCnpj,
    isLoadingCompanyInfo,
    handleApplyCnpjMask,
    hasError,
  } = useCompanyRegisterForm();

  const {
    register,
    watch,
    formState: { errors },
    trigger,
  } = methodsForm;

  const [cnpj] = watch(["cnpj"]);

  const isFieldsCompanyInfoDisabled = !cnpj || isLoadingCompanyInfo || hasError;

  useEffect(() => {
    if (cnpj) {
      trigger("cnpj");
    }
  }, [cnpj]);

  return (
    <>
      <FormControl>
        <TextField
          {...register("cnpj")}
          label="CNPJ"
          type="text"
          maxLength={14}
          error={!!errors.cnpj}
          helperText={errors.cnpj?.message as string}
          onChange={async (event) => {
            const { value } = event.target;
            handleApplyCnpjMask(value);
            handleManageFieldsByCnpj(value);
          }}
        />
      </FormControl>

      <FormControl>
        <TextField
          {...register("companyName")}
          label="Razão Social"
          error={!!errors.companyName}
          helperText={errors.companyName?.message as string}
          disabled={isFieldsCompanyInfoDisabled}
        />
      </FormControl>

      <FormControl>
        <TextField
          {...register("tradeName")}
          label="Nome Fantasia"
          error={!!errors.tradeName}
          helperText={errors.tradeName?.message as string}
          disabled={isFieldsCompanyInfoDisabled}
        />
      </FormControl>
    </>
  );
};
