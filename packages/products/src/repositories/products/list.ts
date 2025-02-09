import { eq } from "drizzle-orm";
import { db } from "database";
import { products, tags, tagsToProducts } from "database/schema";

export const listProducts = async () => {
  const productsWithTags = await db
    .select()
    .from(tagsToProducts)
    .leftJoin(products, eq(tagsToProducts.productId, products.id))
    .leftJoin(tags, eq(tagsToProducts.tagId, tags.id))
    .groupBy(products.id);

  return productsWithTags;
};
