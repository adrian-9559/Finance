import { Router } from "express";
import {
  createInformeFinanciero,
  getInformeFinancieroById,
  getAllInformesFinancieros,
  updateInformeFinanciero,
  deleteInformeFinanciero,
} from "../controllers/informesFinancierosController";

const router = Router();

router
    // Ruta para crear un nuevo informe financiero
    .post("/", createInformeFinanciero)
    // Ruta para obtener todos los informes financieros
    .get("/", getAllInformesFinancieros);

router
    // Ruta para obtener un informe financiero por ID
    .get("/:id_informe", getInformeFinancieroById)
    // Ruta para actualizar un informe financiero por ID
    .put("/:id_informe", updateInformeFinanciero)
    // Ruta para eliminar un informe financiero por ID
    .delete("/:id_informe", deleteInformeFinanciero);

export default router;