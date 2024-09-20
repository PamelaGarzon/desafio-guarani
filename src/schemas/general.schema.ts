import { z } from "zod";

export const generalSchema = z.object({
  personType: z.enum(["fisica", "juridica"]).default("juridica"),
  email: z.union([z.literal(""), z.string().email("Email inválido")]),
  phone: z.string().optional(),
});
