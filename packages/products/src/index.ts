import { RUN_MIGRATIONS, PORT } from "config";
import { runMigrations } from "./database";
import app from "./app";

const start = () => {
  // Run database migrations
  if (RUN_MIGRATIONS) {
    void runMigrations();
  }

  // Start the server
  app.listen({ port: PORT }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
  });
};

start();
