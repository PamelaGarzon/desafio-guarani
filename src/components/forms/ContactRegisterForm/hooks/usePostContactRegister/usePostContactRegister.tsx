import { useState } from "react";
import { postRegisterContact } from "../../../../../services";
import { RegisterFormValues } from "../../types";
import { toast } from "react-toastify";

export const usePostContactRegister = () => {
  const [loading, setLoading] = useState(false);

  const handleContactRegister = async (registerData: RegisterFormValues) => {
    setLoading(true);

    try {
      await postRegisterContact(registerData);
      toast.success("Usuário criado com sucesso!");
    } catch (error: any) {
      toast.error("Erro ao cadastrar o contato.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleContactRegister,
  };
};
