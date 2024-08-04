export const deleteOptions = {
  schema: {
    params: {
      type: "object",
      required: ["id"],
      properties: {
        id: { type: "string" },
      },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "string" },
      },
    },
  },
};
