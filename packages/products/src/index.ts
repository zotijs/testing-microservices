import { PORT } from "config";
import app from "./app";

const start = () => {
  // vite-node HMR
  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      app.close().then(() => {
        app.log.info("[HMR] Restarting Server");
      });
    });
  }

  app.listen({ port: PORT }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
  });
};

start();
