import { pgTable, serial, text, numeric, integer } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  quantity: integer("quantity").default(0),
  image: text("image"),
});

export const tags = pgTable("tag", {
  id: serial("id").primaryKey(),
  name: text("name").unique().notNull(),
});

export const tagsToProducts = pgTable("tags_to_products", {
  tagId: integer("tag_id")
    .notNull()
    .references(() => tags.id),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
});
