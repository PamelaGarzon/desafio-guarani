import {
  REGEX_ONLY_NUMBERS,
  REGEX_MASK_PHONE_NUMBER,
} from "../constants/formatters.constants";

export const removeSpecialCharacters = (value: string) => {
  return value.replace(/[^\d]+/g, "");
};

export const formatOnlyNumbers = (value = "") => {
  return value.replace(REGEX_ONLY_NUMBERS, "");
};

export const formatPhoneNumber = (value = "") => {
  const phoneNumber = formatOnlyNumbers(value).replace(/\s/g, "");
  return phoneNumber.replace(REGEX_MASK_PHONE_NUMBER, "($1) $2-$3");
};

export const formatCPF = (value = "") => {
  const cpf = formatOnlyNumbers(value).replace(/\s/g, "");
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

export const formatCNPJ = (value = "") => {
  const cnpj = formatOnlyNumbers(value).replace(/\s/g, "");
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
};

export const formatZipCode = (value = "") => {
  const zipcode = formatOnlyNumbers(value).replace(/\s/g, "");

  return zipcode.replace(/(\d{5})(\d{3})/, "$1-$2");
};