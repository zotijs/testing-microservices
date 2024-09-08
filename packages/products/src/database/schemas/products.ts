import { pgTable, serial, text, numeric, integer } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  quantity: integer("quantity").default(0),
  image: text("image"),
});
