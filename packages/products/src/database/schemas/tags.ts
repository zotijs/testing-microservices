import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const tags = pgTable("tag", {
  id: serial("id").primaryKey(),
  name: text("name").unique().notNull(),
});
