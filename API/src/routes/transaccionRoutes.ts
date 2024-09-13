import { Router } from "express";
import {
  createTransaccion,
  getTransaccionById,
  getAllTransacciones,
  updateTransaccion,
  deleteTransaccion,
} from "../controllers/transaccionController";

const router = Router();

router
    // Ruta para crear una nueva transacción
    .post("/", createTransaccion)
    // Ruta para obtener todas las transacciones
    .get("/", getAllTransacciones);

router
    // Ruta para obtener una transacción por ID
    .get("/:id_transaccion", getTransaccionById)
    // Ruta para actualizar una transacción por ID
    .put("/:id_transaccion", updateTransaccion)
    // Ruta para eliminar una transacción por ID
    .delete("/:id_transaccion", deleteTransaccion);

export default router;