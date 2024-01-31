import fastify from "fastify";
import { healthPlugin } from "common";
import { NODE_ENV, LOGGER_SETUP } from "config";

import { v1Routes } from "./routes";

const app = fastify({ logger: LOGGER_SETUP[NODE_ENV] ?? true });

// plugins
await app.register(healthPlugin);

// routes
await app.register(v1Routes, { prefix: "/v1" });

export default app;
