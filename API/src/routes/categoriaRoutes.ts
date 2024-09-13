import { Router } from "express";
import {
  createCategoria,
  getCategoriaById,
  getAllCategorias,
  updateCategoria,
  deleteCategoria,
} from "../controllers/categoriaController";

const router = Router();

router
    // Ruta para crear una nueva categoría
    .post("/", createCategoria)
    // Ruta para obtener todas las categorías
    .get("/", getAllCategorias);

router
    // Ruta para obtener una categoría por ID
    .get("/:id_categoria", getCategoriaById)
    // Ruta para actualizar una categoría por ID
    .put("/:id_categoria", updateCategoria)
    // Ruta para eliminar una categoría por ID
    .delete("/:id_categoria", deleteCategoria);

export default router;