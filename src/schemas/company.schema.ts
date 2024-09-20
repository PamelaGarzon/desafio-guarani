import { z } from "zod";

export const companySchema = z.object({
  companyName: z.string().optional(),
  tradeName: z.string().optional(),
  cnpj: z.string().optional()
});
