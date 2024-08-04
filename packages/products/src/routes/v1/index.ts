import { FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import {
  createProduct,
  type CreateProduct,
  type CreateProductResult,
} from "services/create";
import { deleteProduct, type DeleteProductResult } from "services/delete";
import {
  listProducts,
  type ListProducts,
  type ListProductsResult,
} from "services/list";
import { readProduct, type ReadProductResult } from "services/read";
import {
  updateProduct,
  type UpdateProduct,
  type UpdateProductResult,
} from "services/update";
import {
  createOptions,
  deleteOptions,
  listOptions,
  readOptions,
  updateOptions,
} from "./schemas";

export const routes: FastifyPluginAsync<FastifyPluginOptions> = async (
  fastify
) => {
  fastify.get<{ Querystring: ListProducts; Reply: ListProductsResult }>(
    "/products",
    listOptions,
    async (request, reply) => {
      const products = await listProducts(request.query);

      reply.send(products);
    }
  );

  fastify.get<{ Params: { id: string }; Reply: ReadProductResult }>(
    "/products/:id",
    readOptions,
    async (request, reply) => {
      const product = await readProduct(request.params.id);

      reply.send(product);
    }
  );

  fastify.put<{ Body: CreateProduct; Reply: CreateProductResult }>(
    "/products",
    createOptions,
    async (request, reply) => {
      const newProductId = await createProduct(request.body);

      reply.send(newProductId);
    }
  );

  fastify.patch<{ Body: UpdateProduct; Reply: UpdateProductResult }>(
    "/products",
    updateOptions,
    async (request, reply) => {
      const updatedProduct = await updateProduct(request.body);

      reply.send(updatedProduct);
    }
  );

  fastify.delete<{ Params: { id: string }; Reply: DeleteProductResult }>(
    "/products",
    deleteOptions,
    async (request, reply) => {
      const deletedProductId = await deleteProduct(request.params.id);

      reply.send(deletedProductId);
    }
  );
};
