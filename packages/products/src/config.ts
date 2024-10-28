type NodeEnv = "development" | "production" | "test";

// Environment
export const NODE_ENV = (process.env.NODE_ENV as NodeEnv) ?? "development";
export const PORT = parseInt(process.env.PORT ?? "4000", 10);

// Fastify Logger Setup
export const LOGGER_SETUP = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  production: true,
  test: false,
} as const;

// Database
export const DATABASE_HOST = process.env.DATABASE_HOST ?? "localhost";
export const DATABASE_PORT = parseInt(process.env.DATABASE_PORT ?? "5432", 10);
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_NAME = process.env.DATABASE_NAME ?? "products_db";
export const RUN_MIGRATIONS = process.env.RUN_MIGRATIONS === "true";

// Assets Environment Variables
export const ASSETS_BASE_URL =
  process.env.ASSETS_BASE_URL ?? "http://localhost:5000";

export const DEFAULT_PRODUCT_IMAGE_NAME =
  process.env.DEFAULT_PRODUCT_IMAGE_NAME ?? "default-product.png";
