import { PORT } from "config";
import app from "./app";

const start = () => {
  app.listen({ port: PORT }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
  });
};

start();
