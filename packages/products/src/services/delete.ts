export type DeleteProductResult = {
  id: string;
};

export const deleteProduct = async (
  id: string
): Promise<DeleteProductResult> => {
  console.log(id);
  // TODO delete product
  return { id };
};
