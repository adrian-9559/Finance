import Express from "express";
import Router from "./routes";
import Sequelize from "./config/database";

const app = Express();

app.use(Express.json());

app.use("/", Router);

// Conectar a la base de datos
Sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos establecida correctamente.");
  })
  .catch((err: any) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });

export default app;
