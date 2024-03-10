import { FastifyRequest, FastifyReply } from "fastify";

export const readManyOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "array" },
        },
      },
    },
  },
};

export type ReadManyReply = {
  hello: Array<string>;
};

export const readManyHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  request.log.info("Reading many products");

  await reply.send({ hello: ["1", "2", "3", "4"] });
};
