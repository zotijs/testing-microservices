export const deleteOptions = {
  schema: {
    params: {
      type: "object",
      required: ["id"],
      properties: {
        id: { type: "number" },
      },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "number" },
      },
    },
  },
};
