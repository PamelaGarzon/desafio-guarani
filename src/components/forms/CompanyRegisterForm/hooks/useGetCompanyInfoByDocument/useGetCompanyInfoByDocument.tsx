import { useState } from "react";
import { AxiosError } from "axios";
import { getCompanyMessageError } from "./utils";
import { COMPANY_INFO_STATUS_CODE } from "./constants";
import { getCompanyInfoByDocument } from "../../../../../services/get";
import { toast } from "react-toastify";

export const useGetCompanyInfoByDocument = () => {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getCompanyInfo = async (companyDocument: string) => {
    setHasError(false);
    setLoading(true);
    try {
      const response = await getCompanyInfoByDocument(companyDocument);

      if (response.status === COMPANY_INFO_STATUS_CODE.OK) {
        const { data } = response;

        if (data.status === "ERROR") {
          setHasError(true);
          toast.error(data.message);
          return null;
        }

        return {
          companyName: data.nome,
          tradeName: data.fantasia,
        };
      }
    } catch (error) {
      const errorCompanyInfo = error as AxiosError;
      setHasError(true);
      const errorMessage = getCompanyMessageError(
        errorCompanyInfo?.response?.status
      );
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    hasError,
    getCompanyInfo,
  };
};
