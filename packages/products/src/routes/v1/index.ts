import { FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import {
  readOneOptions,
  readOneHandler,
  type ReadOneParams,
  type ReadOneReply,
  readManyOptions,
  readManyHandler,
  type ReadManyReply,
  createOptions,
  createHandler,
  type CreateRequestBody,
  type CreateReply,
  deleteOptions,
  deleteHandler,
  type DeleteRequestBody,
  updateOptions,
  updateHandler,
  type UpdateRequestBody,
  type UpdateReply,
} from "controllers";

export const routes: FastifyPluginAsync<FastifyPluginOptions> = async (
  fastify
) => {
  fastify.get<{ Reply: ReadManyReply }>(
    "/products",
    readManyOptions,
    readManyHandler
  );

  fastify.get<{ Params: ReadOneParams; Reply: ReadOneReply }>(
    "/products/:id",
    readOneOptions,
    readOneHandler
  );

  fastify.put<{ Body: CreateRequestBody; Reply: CreateReply }>(
    "/products",
    createOptions,
    createHandler
  );

  fastify.patch<{ Body: UpdateRequestBody; Reply: UpdateReply }>(
    "/products",
    updateOptions,
    updateHandler
  );

  fastify.delete<{ Body: DeleteRequestBody }>(
    "/products",
    deleteOptions,
    deleteHandler
  );
};
