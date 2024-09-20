import { COMPANY_INFO_STATUS_CODE } from "./constants";

export const getCompanyMessageError = (status?: number) => {
  if (status === COMPANY_INFO_STATUS_CODE.MULTIPLE_REQUESTS_CALLS)
    return "Você fez muitas chamadas. Tente novamente mais tarde.";
  if (status === COMPANY_INFO_STATUS_CODE.NOT_FOUND)
    return "CNPJ não encontrado.";

  return "Ocorreu um erro inesperado. Tente novamente.";
};
