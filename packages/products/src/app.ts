import fastify from "fastify";
import { healthPlugin } from "common";
import { NODE_ENV, LOGGER_SETUP } from "config";

import { v1Routes } from "./routes";

// Fastify loading order:
// 1. plugins (from the Fastify ecosystem)
// 2. your plugins
// 3. decorators
// 4. hooks
// 5. services

const app = fastify({ logger: LOGGER_SETUP[NODE_ENV] ?? true });

// plugins
void app.register(healthPlugin);

// routes
void app.register(v1Routes, { prefix: "/v1" });

export default app;
