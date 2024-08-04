import { type ReadProductResult } from "./read";

export type ListProducts = {
  limit?: number;
  offset?: number;
};

export type ListProductsResult = {
  products: ReadProductResult[];
};

export const listProducts = async ({
  limit = 10,
  offset = 0,
}: ListProducts): Promise<ListProductsResult> => {
  console.log(limit, offset);
  // TODO list products
  return {
    products: [
      {
        id: "1",
        name: "Product 1",
        description: "Description 1",
        price: 100,
        quantity: 10,
        image: "https://via.placeholder.com/150",
        tags: ["tag1", "tag2"],
      },
      {
        id: "2",
        name: "Product 2",
        description: "Description 2",
        price: 200,
        quantity: 20,
        image: "https://via.placeholder.com/150",
        tags: ["tag1", "tag2"],
      },
    ],
  };
};
