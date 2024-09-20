import { useFormContext } from "react-hook-form";
import { useGetCompanyInfoByDocument } from "./useGetCompanyInfoByDocument";
import {
  formatCNPJ,
  removeSpecialCharacters,
} from "../../../../helpers/utils/formatters.utils";

export const CNPJ_MASK_LENGTH = 14;

type CompanyInfo = {
  companyName: string;
  tradeName: string;
};

export const useCompanyRegisterForm = () => {
  const methodsForm = useFormContext();

  const { loading, getCompanyInfo, hasError } = useGetCompanyInfoByDocument();

  const setCompanyInfoFields = (companyInfo: CompanyInfo) => {
    methodsForm.setValue("companyName", companyInfo.companyName);
    methodsForm.setValue("tradeName", companyInfo.tradeName);
  };

  const clearCompanyInfoFields = () => {
    methodsForm.resetField("companyName");
    methodsForm.resetField("tradeName");
  };

  const handleApplyCnpjMask = (document: string) => {
    methodsForm.setValue("cnpj", formatCNPJ(document));
    methodsForm.clearErrors("cnpj");
  };

  const handleManageFieldsByCnpj = async (value: string) => {
    const cnpjWithoutMask = removeSpecialCharacters(value);

    if (cnpjWithoutMask?.length === CNPJ_MASK_LENGTH) {
      const info = await getCompanyInfo(cnpjWithoutMask);

      if (info) {
        setCompanyInfoFields(info);
      } else {
        clearCompanyInfoFields();
      }
    } else {
      clearCompanyInfoFields();
    }
  };

  return {
    methodsForm,
    handleManageFieldsByCnpj,
    handleApplyCnpjMask,
    isLoadingCompanyInfo: loading,
    hasError,
  };
};
