import { type ReadProductResult } from "./read";

export type UpdateProduct = Partial<ReadProductResult> & { id: string };

export type UpdateProductResult = ReadProductResult;

export const updateProduct = async ({
  id,
  name,
  description,
  price,
  quantity,
  image,
  tags,
}: UpdateProduct): Promise<UpdateProductResult> => {
  console.log(id, name, description, price, quantity, image, tags);
  // TODO update product
  return {
    id,
    name: "test",
    description: "test",
    price: 2,
    quantity: 1,
    image: "http://test.url",
    tags: [],
  };
};
