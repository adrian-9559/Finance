import { Router } from "express";
import {
  createConfiguracionUsuario,
  getConfiguracionUsuarioById,
  getAllConfiguracionesUsuario,
  updateConfiguracionUsuario,
  deleteConfiguracionUsuario,
} from "../controllers/configUserController";

const router = Router();

router
    // Ruta para crear una nueva configuración de usuario
    .post("/", createConfiguracionUsuario)
    // Ruta para obtener todas las configuraciones de usuario
    .get("/", getAllConfiguracionesUsuario);

router
    // Ruta para obtener una configuración de usuario por ID
    .get("/:id_configuracion", getConfiguracionUsuarioById)
    // Ruta para actualizar una configuración de usuario por ID
    .put("/:id_configuracion", updateConfiguracionUsuario)
    // Ruta para eliminar una configuración de usuario por ID
    .delete("/:id_configuracion", deleteConfiguracionUsuario);

export default router;