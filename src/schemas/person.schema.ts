import { z } from "zod";

export const personalInfoSchema = z.object({
  fullName: z.string().optional(),
  cpf: z.string().optional(),
});
