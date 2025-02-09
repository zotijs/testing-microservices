import { eq } from "drizzle-orm";
import { db } from "database";
import { products } from "database/schema";

export const deleteProduct = async (id: number) => {
  await db.delete(products).where(eq(products.id, id));

  return id;
};
