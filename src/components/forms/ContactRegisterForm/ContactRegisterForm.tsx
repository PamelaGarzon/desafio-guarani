import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Button, Stack, Typography } from "@mui/material";
import { RegisterFormValues } from "./types";
import { useEffect } from "react";
import { AddressRegisterForm } from "../AddressRegisterForm";
import { GeneralRegisterForm } from "../GeneralRegisterForm";
import { DEFAULT_REGISTER_FORM_VALUES } from "./constants";
import { registerFormSchema } from "../../../schemas";
import { usePostContactRegister } from "./hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactRegisterForm = () => {
  const methods = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: DEFAULT_REGISTER_FORM_VALUES,
  });

  const { handleContactRegister } = usePostContactRegister();

  const [personType] = methods.watch(["personType"]);

  const onSubmit = async (data: RegisterFormValues) => {
    await handleContactRegister(data);
    methods.reset();
  };

  const handleResetCommons = () => {
    methods.setValue("email", "");
    methods.setValue("phone", "");
    methods.setValue("zipCode", "");
    methods.setValue("city", "");
    methods.setValue("street", "");
    methods.setValue("number", "");
    methods.setValue("neighborhood", "");
    methods.setValue("complement", "");
    methods.setValue("state", "");
  };

  useEffect(() => {
    if (personType === "fisica") {
      handleResetCommons();
      methods.setValue("companyName", "");
      methods.setValue("tradeName", "");
      methods.setValue("cnpj", "");
      methods.clearErrors();
    } else {
      handleResetCommons();
      methods.setValue("fullName", "");
      methods.setValue("cpf", "");
      methods.clearErrors();
    }
  }, [personType, methods.setValue]);

  return (
    <Stack
      maxWidth={{ xs: "100%", sm: 400, md: 600 }}
      width="100%"
      p={{ xs: 2, sm: 4 }}
      bgcolor="white"
      border={1}
      borderColor="gray"
      borderRadius={2}
      mx="auto"
    >
      <Typography mb={2} variant="h5" textAlign="center">
        Formulário de Contato
      </Typography>
      <FormProvider {...methods}>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          gap={3}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <GeneralRegisterForm />
          <AddressRegisterForm />
          <Button
            type="submit"
            variant="contained"
            sx={{
              alignSelf: "center",
              width: { xs: "100%", sm: "auto" },
              backgroundColor: "rgb(39, 75, 43)",
            }}
          >
            Enviar
          </Button>
        </Box>
      </FormProvider>
      <ToastContainer />
    </Stack>
  );
};
