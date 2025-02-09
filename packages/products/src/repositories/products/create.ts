import { db } from "database";
import { products, tagsToProducts } from "database/schema";

export type ProductCreate = Omit<typeof products.$inferInsert, "id"> & {
  tagIds?: number[];
};

// TODO add caching invalidation logic
export const createProduct = async (product: ProductCreate) => {
  const newProductId = await db
    .insert(products)
    .values(product)
    .returning({ id: products.id });

  const productId = newProductId[0].id;

  // tags are pre-populated for now
  if (product?.tagIds?.length) {
    const preparedTagsToProducts = product.tagIds.map((tagId) => ({
      tagId,
      productId,
    }));

    await db.insert(tagsToProducts).values(preparedTagsToProducts);
  }

  return productId;
};
