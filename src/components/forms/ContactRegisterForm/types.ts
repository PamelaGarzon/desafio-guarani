import { z } from "zod";
import { registerFormSchema } from "../../../schemas/register.schema";

export type RegisterFormValues = z.infer<typeof registerFormSchema>