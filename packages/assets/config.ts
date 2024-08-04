type NodeEnv = "development" | "production" | "test";

export const NODE_ENV = (process.env.NODE_ENV as NodeEnv) ?? "development";
export const PORT = parseInt(process.env.PORT ?? "5000");

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
