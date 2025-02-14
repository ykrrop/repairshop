import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { customers } from "@/db/schema";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) =>
    schema.firstName.min(1, "Поле Имя обязательно для заполнения"),
  lastName: (schema) =>
    schema.firstName.min(1, "Поле Фамилия обязательно для заполнения"),
  address1: (schema) =>
    schema.address1.min(1, "Поле Адресс обязательно для заполнения"),
  city: (schema) => schema.city.min(1, "Поле Город обязательно для заполнения"),
  state: (schema) =>
    schema.state.length(2, "Гражданство должно быть из 2-х букв"),
  email: (schema) =>
    schema.email.email("Неверно введен адрес электронной почты"),
  zip: (schema) =>
    schema.zip.regex(/^\{6}$/, "Почтовый индекс должен состоять из 6 цифр"),
  phone: (schema) =>
    schema.phone.regex(
      /^(?:\+7|8)\d{10}$/,
      "Неверный формат телефона. Используйте +7XXXXXXXXXX или 8XXXXXXXXXX"
    ),
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type;

export type selectCustomerSchemaType = typeof selectCustomerSchema._type;
