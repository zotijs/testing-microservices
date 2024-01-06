import { describe, it, vi, afterEach, expect } from "vitest";
import fastify from "fastify";

import prismaPlugin from "./prismaPlugin";

describe("prismaPlugin", () => {
  vi.mock("@prisma/client", () => {
    const PrismaClient = vi.fn();
    PrismaClient.prototype.$connect = vi.fn();
    PrismaClient.prototype.$disconnect = vi.fn();

    return { PrismaClient };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should wrap fastify instance with a prisma client", async () => {
    const app = fastify({ logger: false });

    await app.register(prismaPlugin);

    expect(app.prisma).toBeDefined();
  });
});
