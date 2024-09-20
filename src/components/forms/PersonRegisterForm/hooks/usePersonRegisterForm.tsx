import { useFormContext } from "react-hook-form";
import { formatCPF } from "../../../../helpers/utils/formatters.utils";

export const usePersonRegisterForm = () => {
  const methodsForm = useFormContext();

  const handleApplyCpfMask = (document: string) => {
    methodsForm.setValue("cpf", formatCPF(document));
    methodsForm.clearErrors("cpf");
  };

  return {
    methodsForm,
    handleApplyCpfMask,
  };
};
