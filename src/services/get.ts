import axios from "axios";
import jsonpAdapter from "axios-jsonp";

export const getAddressInfoByZipCode = async (zipCode: string) => {
  return await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
};

export const getCompanyInfoByDocument = async (document: string) => {
  return await axios.get(`https://receitaws.com.br/v1/cnpj/${document}`, {
    adapter: jsonpAdapter, // Especifica o adapter diretamente na requisição
    headers: {
      "Content-Type": "application/json",
    },
  });
};
