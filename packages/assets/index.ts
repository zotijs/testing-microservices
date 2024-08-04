import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { healthPlugin } from "@zotijstestingms/common";
import path from "node:path";

import { NODE_ENV, PORT, LOGGER_SETUP } from "config";

const dirname = path.dirname(new URL(import.meta.url).pathname);

const app = fastify({ logger: LOGGER_SETUP[NODE_ENV] ?? true });

app.register(healthPlugin);

app.register(fastifyStatic, {
  root: path.join(dirname, "static"),
});

app.get<{ Params: { fileName: string } }>(
  "/:fileName",
  {
    schema: {
      params: {
        fileName: {
          type: "string",
        },
      },
    },
  },
  async (request, reply) => {
    const { fileName } = request.params;

    return reply.sendFile(fileName);
  }
);

app.listen({ port: PORT }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
