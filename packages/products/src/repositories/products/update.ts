import { eq } from "drizzle-orm";
import { db } from "database";
import { products, tagsToProducts } from "database/schema";

export type ProductUpdate = Partial<
  Omit<typeof products.$inferInsert, "id">
> & {
  id: number;
  tagIds?: number[];
};

// TODO add caching invalidation logic
export const updateProduct = async (product: ProductUpdate) => {
  const { id, tagIds, ...rest } = product;

  if (tagIds?.length) {
    const preparedTagsToProducts = tagIds.map((tagId) => ({
      tagId,
      productId: id,
    }));

    await db.insert(tagsToProducts).values(preparedTagsToProducts);
  }

  await db.update(products).set(rest).where(eq(products.id, id));

  return id;
};
