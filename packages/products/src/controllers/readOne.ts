import { FastifyRequest, FastifyReply } from "fastify";

export const readOneOptions = {
  schema: {
    params: { id: { type: "number" } },
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "number" },
        },
      },
    },
  },
};

export type ReadOneParams = { id: number };
export type ReadOneReply = { hello: number };

export const readOneHandler = async (
  request: FastifyRequest<{ Params: ReadOneParams }>,
  reply: FastifyReply
) => {
  const { id } = request.params;

  await reply.send({ hello: id });
};
