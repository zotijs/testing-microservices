export type ReadProductResult = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  tags: string[];
};

export const readProduct = async (id: string): Promise<ReadProductResult> => {
  console.log(id);
  // TODO read product
  return {
    id: "1",
    name: "Product 1",
    description: "Description 1",
    price: 100,
    quantity: 10,
    image: "https://via.placeholder.com/150",
    tags: ["tag1", "tag2"],
  };
};
