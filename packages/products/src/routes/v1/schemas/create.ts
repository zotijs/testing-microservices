export const createOptions = {
  schema: {
    body: {
      type: "object",
      required: ["name", "description", "price"],
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        price: { type: "string" },
        quantity: { type: "number" },
        image: { type: "string" },
        tagIds: { type: "array", items: { type: "number" } },
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
  },
};
