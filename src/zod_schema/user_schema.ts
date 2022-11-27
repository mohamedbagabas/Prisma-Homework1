import { string, z } from "zod";

export const addUserSchema = z.object({
  body: z.object({
    username: z
      .string({ required_error: "username is required !" })
      .min(4, "username must be more than 4 characters"),
    password: z
      .string({ required_error: "password is required !" })
      .min(6, "password must be more than 6 characters"),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    role: z.enum(
      ["ADMIN", "USER"],
      string({
        required_error: "role is required !",
        invalid_type_error: "This field must contain : ADMIN or USER",
      })
    ),
    joiningYear: z.string({ required_error: "joiningYear is required !" }),
    age: z
      .number({
        required_error: "age is required ",
        invalid_type_error: "age must be a number",
      })
      .min(17, "duration must be more than 17"),
  }),
});

export const updateUserSchema = z.object({
  body: z.object({
    username: z
      .string({ required_error: "username is required !" })
      .min(4, "username must be more than 4 characters"),
    password: z
      .string({ required_error: "password is required !" })
      .min(6, "password must be more than 6 characters"),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    role: z.enum(
      ["ADMIN", "USER"],
      string({
        required_error: "role is required !",
        invalid_type_error: "This field must contain : ADMIN or USER",
      })
    ),
    joiningYear: z.string({ required_error: "joiningYear is required !" }),
    age: z
      .number({
        required_error: "age is required ",
        invalid_type_error: "age must be a number",
      })
      .min(17, "duration must be more than 17"),
  }),
  params: z.object({
    id: z.string({ required_error: "Please send id in the params" }),
  }),
});

export const getUserByIdSchema = z.object({
  query: z.object({
    id: z.string({ required_error: "Please send id in the params" }),
  }),
});

export type GetUserByIdSchemaType = z.infer<typeof getUserByIdSchema>["query"];

export type UserSchemaType = z.infer<typeof updateUserSchema>["params"];