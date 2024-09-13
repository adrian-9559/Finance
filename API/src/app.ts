import express from 'express';
import Router from './routes';  // Asegúrate de que este path es correcto
import Sequelize from './config/database';

const app = express();

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Middleware de logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Usa las rutas definidas en routes.js
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