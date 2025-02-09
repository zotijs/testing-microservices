import { deleteProduct as deleteProductRepository } from "repositories/products";

export type DeleteProductResult = {
  id: number;
};

export const deleteProduct = async (
  id: number
): Promise<DeleteProductResult> => {
  const deletedProductId = await deleteProductRepository(id);

  return { id: deletedProductId };
};
