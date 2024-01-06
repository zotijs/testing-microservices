import { FastifyRequest, FastifyReply } from "fastify";

export const createOptions = {
  schema: {
    body: {
      name: { type: "string" },
      description: { type: "string" },
    },
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          description: { type: "string" },
        },
      },
    },
  },
};

export type CreateRequestBody = {
  name: string;
  description: string;
};

export type CreateReply = { id: string; name: string; description: string };

export const createHandler = async (
  request: FastifyRequest<{ Body: CreateRequestBody }>,
  reply: FastifyReply
) => {
  const { name, description } = request.body;

  reply.send({ id: Date.now(), name, description });
};
