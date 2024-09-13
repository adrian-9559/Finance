import { Router } from "express";
import {
  createObjetivoAhorro,
  getObjetivoAhorroById,
  getAllObjetivosAhorro,
  updateObjetivoAhorro,
  deleteObjetivoAhorro,
} from "../controllers/objetivoAhorroController";

const router = Router();

router
    // Ruta para crear un nuevo objetivo de ahorro
    .post("/", createObjetivoAhorro)
    // Ruta para obtener todos los objetivos de ahorro
    .get("/", getAllObjetivosAhorro);

router
    // Ruta para obtener un objetivo de ahorro por ID
    .get("/:id_objetivo_ahorro", getObjetivoAhorroById)
    // Ruta para actualizar un objetivo de ahorro por ID
    .put("/:id_objetivo_ahorro", updateObjetivoAhorro)
    // Ruta para eliminar un objetivo de ahorro por ID
    .delete("/:id_objetivo_ahorro", deleteObjetivoAhorro);

export default router;