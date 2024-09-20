import { z } from "zod";
import { addressSchema } from "./address.schema";
import { companySchema } from "./company.schema";
import { personalInfoSchema } from "./person.schema";
import { generalSchema } from "./general.schema";
import { isFullNameValid } from "../helpers";
import { isValidCNPJ, isValidCPF } from "@brazilian-utils/brazilian-utils";

export const registerFormSchema = generalSchema
  .merge(personalInfoSchema)
  .merge(companySchema)
  .merge(addressSchema)
  .superRefine((data, ctx) => {
    // Validação para pessoa física
    if (data.personType === "fisica") {
      console.log(data);
      // Validação do nome completo
      if (!data.fullName || !isFullNameValid(data.fullName)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "O Nome deve conter nome e sobrenome.",
          path: ["fullName"],
        });
      }

      if (!data.cpf) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "O CPF é um campo obrigatório.",
          path: ["cpf"],
        });
      } else if (!isValidCPF(data.cpf)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "CPF inválido",
          path: ["cpf"],
        });
      }
    }

    // Validação para pessoa jurídica
    if (data.personType === "juridica") {
      // Validação da razão social
      if (!data.companyName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "A razão social é obrigatória.",
          path: ["companyName"],
        });
      }

      // Validação do CNPJ obrigatório e válido
      if (!data.cnpj) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "O CNPJ é um campo obrigatório.",
          path: ["cnpj"],
        });
      } else if (!isValidCNPJ(data.cnpj)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "CNPJ inválido.",
          path: ["cnpj"],
        });
      }

      // Validação do nome fantasia
      if (!data.tradeName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "O nome fantasia é um campo obrigatório.",
          path: ["tradeName"],
        });
      }
    }
  });
