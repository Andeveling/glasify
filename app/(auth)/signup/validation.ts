import { z } from "zod"

export const SignupFormSchema = z
  .object({
    email: z.string().email({ message: "El email no es válido." }),
    phoneNumber: z.string().min(10, { message: "El número de teléfono debe tener al menos 10 dígitos." }),
    password: z
      .string()
      .min(8, { message: "La contraseña debe tener al menos 8 caracteres." })
      .regex(/[a-zA-Z]/, { message: "Debe contener al menos una letra." })
      .regex(/[0-9]/, { message: "Debe contener al menos un número." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Debe contener al menos un carácter especial (!@#$%^&*).",
      })
      .trim(),
    confirmPassword: z
      .string()
      .min(8, { message: "La contraseña debe tener al menos 8 caracteres." })
      .regex(/[a-zA-Z]/, { message: "Debe contener al menos una letra." })
      .regex(/[0-9]/, { message: "Debe contener al menos un número." })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Debe contener al menos un carácter especial (!@#$%^&*).",
      })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
  })
