import { FastifyRequest, FastifyReply } from "fastify";

export const deleteOptions = {
  schema: {
    body: {
      id: { type: "string" },
    },
    response: {
      204: {},
    },
  },
};

export type DeleteRequestBody = {
  id: string;
};

export const deleteHandler = async (
  request: FastifyRequest<{ Body: DeleteRequestBody }>,
  reply: FastifyReply
) => {
  const { id } = request.body;

  request.log.info(`Deleting product with id: ${id}`);

  await reply.send();
};
