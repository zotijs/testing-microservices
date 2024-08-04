export const updateOptions = {
  schema: {
    body: {
      type: "object",
      required: ["id"],
      properties: {
        id: { type: "string" },
        name: { type: "string" },
        description: { type: "string" },
        price: { type: "number" },
        quantity: { type: "number" },
        image: { type: "string" },
        tags: { type: "array", items: { type: "string" } },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          description: { type: "string" },
          price: { type: "number" },
          quantity: { type: "number" },
          image: { type: "string" },
          tags: { type: "array", items: { type: "string" } },
        },
      },
    },
  },
};
