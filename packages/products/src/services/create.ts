import { ASSETS_BASE_URL, DEFAULT_PRODUCT_IMAGE_NAME } from "config";

export type CreateProduct = {
  name: string;
  description: string;
  price: number;
  quantity?: number;
  image?: string;
  tags?: string[];
};

export type CreateProductResult = {
  id: string;
};

export const createProduct = async ({
  name,
  description,
  price,
  quantity = 0,
  image = `${ASSETS_BASE_URL}/${DEFAULT_PRODUCT_IMAGE_NAME}`,
  tags = [],
}: CreateProduct): Promise<CreateProductResult> => {
  console.log(name, description, price, quantity, image, tags);
  // TODO create product
  return { id: "1" };
};
