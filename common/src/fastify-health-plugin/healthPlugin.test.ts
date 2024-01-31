import { describe, it, expect } from "vitest";
import fastify from "fastify";

import healthPlugin from "./healthPlugin";

describe("healthPlugin", () => {
  it("should return { up: true } when fastify is healthy", async () => {
    const app = fastify({ logger: false });

    await app.register(healthPlugin);

    const { json } = await app.inject({
      method: "get",
      url: "/health",
    });

    const res = json<{ up: boolean }>();

    expect(res).toEqual({ up: true });
  });
});
