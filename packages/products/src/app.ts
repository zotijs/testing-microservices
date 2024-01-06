import fastify from "fastify";
import { NODE_ENV, LOGGER_SETUP } from "config";

import { v1Routes } from "./routes";

const app = fastify({ logger: LOGGER_SETUP[NODE_ENV] ?? true });

app.register(v1Routes, { prefix: "/v1" });

export default app;
