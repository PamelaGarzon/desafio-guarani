import { useState } from "react";
import { getAddressInfoByZipCode } from "../../../../../services/get";
import { ZIP_CODE_INFO_STATUS_CODE } from "./constants";
import { toast } from "react-toastify";

export const useGetAddressByZipCode = () => {
  const [loading, setLoading] = useState(false);

  const getAddressByZipCode = async (zipCode: string) => {
    setLoading(true);

    try {
      const response = await getAddressInfoByZipCode(zipCode);

      if (response.status === ZIP_CODE_INFO_STATUS_CODE.OK) {
        const { data } = response;

        if (data.erro) {
          toast.error("Erro ao buscar pelo CEP");

          return null;
        }

        const { logradouro, bairro, localidade, uf, complemento } = data;

        return {
          street: logradouro,
          neighborhood: bairro,
          city: localidade,
          state: uf,
          complement: complemento || "",
        };
      } else {
        toast.error("CEP inválido ou não encontrado");
        return null;
      }
    } catch (error) {
      toast.error("Erro ao buscar pelo CEP");

      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    getAddressByZipCode,
    loading,
  };
};
