import {
  Autocomplete,
  FormControl,
  TextField as BaseTextFiled,
  Grid,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { BRAZIL_STATES } from "./constants";
import { TextField } from "../../TextField";
import { useAddressRegisterForm } from "./hooks";

export const AddressRegisterForm = () => {
  const {
    isFetchingAddress,
    handleApplyZipCodeMask,
    methodsForm,
    handleManageFieldsByZipCode,
  } = useAddressRegisterForm();

  const {
    register,
    control,
    formState: { errors },
  } = methodsForm;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              {...register("zipCode")}
              label="CEP"
              type="text"
              maxLength={8}
              helperText={errors.zipCode?.message as string}
              error={!!errors.zipCode}
              onChange={async (event) => {
                const { value } = event.target;
                handleApplyZipCodeMask(value);
                handleManageFieldsByZipCode(value);
              }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={9}>
          <FormControl fullWidth>
            <TextField
              {...register("street")}
              label="Endereço"
              error={!!errors.street}
              helperText={errors.street?.message as string}
              disabled={isFetchingAddress}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <TextField
              {...register("number")}
              label="Número"
              error={!!errors.number}
              helperText={errors.number?.message as string}
              disabled={isFetchingAddress}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              {...register("neighborhood")}
              helperText={errors.neighborhood?.message as string}
              label="Bairro"
              error={!!errors.neighborhood}
              disabled={isFetchingAddress}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              {...register("complement")}
              label="Complemento"
              disabled={isFetchingAddress}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="state"
            control={control}
            render={({ field }) => {
              const { onChange, onBlur, value: selectedValue } = field;

              return (
                <Autocomplete
                  options={BRAZIL_STATES}
                  getOptionLabel={(option) => option?.label || ""}
                  isOptionEqualToValue={(option, value) =>
                    option?.value === value?.value
                  }
                  renderInput={(params) => (
                    <BaseTextFiled
                      {...params}
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                      }}
                      size="small"
                      label="Estados (UF)"
                      error={!!errors.state}
                      helperText={errors.state?.message as string}
                      disabled={isFetchingAddress}
                    />
                  )}
                  onChange={(_, selectedOption) => {
                    onChange(selectedOption?.value || "");
                  }}
                  onBlur={onBlur}
                  value={
                    BRAZIL_STATES.find(
                      (option) => option.value === selectedValue
                    ) || null
                  }
                />
              );
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              {...register("city")}
              helperText={errors.city?.message as string}
              label="Cidade"
              error={!!errors.city}
              disabled={isFetchingAddress}
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
