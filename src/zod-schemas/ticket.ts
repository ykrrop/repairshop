import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { tickets } from "@/db/schema";
import { z } from "zod";

export const insertTicketSchema = createInsertSchema(tickets, {
  id: z.union([z.number(), z.literal("(New)")]),
  title: (schema) => schema.title.min(1, "Поле Заголовок обязательно"),
  description: (schema) =>
    schema.description.min(1, "Поле Описание обязательно"),
  tech: (schema) => schema.tech.email("Неверный адресс электронной почты"),
});

export const selectTicketSchema = createSelectSchema(tickets);

export type insertTicketSchemaType = typeof insertTicketSchema._type;

export type selectTicketSchemaType = typeof selectTicketSchema._type;
