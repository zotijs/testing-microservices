import { FastifyRequest, FastifyReply } from "fastify";

export const updateOptions = {
  schema: {
    body: {
      id: { type: "string" },
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

export type UpdateRequestBody = {
  id: string;
  name: string;
  description: string;
};

export type UpdateReply = { id: string; name: string; description: string };

export const updateHandler = async (
  request: FastifyRequest<{ Body: UpdateRequestBody }>,
  reply: FastifyReply
) => {
  const { id, name, description } = request.body;

  await reply.send({ id, name, description });
};
