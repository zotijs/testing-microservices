/* eslint-disable @typescript-eslint/require-await */
import { FastifyPluginAsync } from "fastify";

export type HealthPluginOptions = {
  path?: string;
};

const healthPlugin: FastifyPluginAsync<HealthPluginOptions> = async (
  fastify,
  { path = "health" }
) => {
  fastify.get(`/${path}`, () => {
    return { up: true };
  });
};

export default healthPlugin;
