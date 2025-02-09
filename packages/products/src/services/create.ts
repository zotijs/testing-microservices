import { ASSETS_BASE_URL, DEFAULT_PRODUCT_IMAGE_NAME } from "config";
import {
  createProduct as createProductRepository,
  type ProductCreate,
} from "repositories/products";

export type CreateProductResult = {
  id: number;
};

export const createProduct = async ({
  name,
  description,
  price,
  quantity = 0,
  image = `${ASSETS_BASE_URL}/${DEFAULT_PRODUCT_IMAGE_NAME}`,
  tagIds = [],
}: ProductCreate): Promise<CreateProductResult> => {
  const newProductId = await createProductRepository({
    name,
    description,
    price,
    quantity,
    image,
    tagIds,
  });

  return { id: newProductId };
};
