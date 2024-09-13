import { Router } from "express";
import {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/usuarioController";

const router = Router();

router
    // Ruta para crear un nuevo usuario
    .post("/", createUser)
    // Ruta para obtener todos los usuarios
    .get("/", getAllUsers);

router
    // Ruta para obtener un usuario por ID
    .get("/:id_usuario", getUserById)
    // Ruta para actualizar un usuario por ID
    .put("/:id_usuario", updateUser)
    // Ruta para eliminar un usuario por ID
    .delete("/:id_usuario", deleteUser);

export default router;
