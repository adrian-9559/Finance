import { Request, Response } from 'express';
import Usuario from '../models/usuarioModel';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { nombre_usuario, correo, contraseña, telefono, moneda_preferida, tipo_autenticacion, estado_cuenta } = req.body;

        const nuevoUsuario = await Usuario.create({
            nombre_usuario,
            correo,
            contraseña,
            telefono,
            moneda_preferida,
            tipo_autenticacion,
            estado_cuenta
        });

        res.status(201).json({
            message: 'Usuario creado con éxito',
            usuario: nuevoUsuario
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id_usuario } = req.params;

        const usuario = await Usuario.findByPk(id_usuario);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(usuario);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id_usuario } = req.params;
        const { nombre_usuario, correo, contraseña, telefono, moneda_preferida, tipo_autenticacion, estado_cuenta } = req.body;

        const usuario = await Usuario.findByPk(id_usuario);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        usuario.nombre_usuario = nombre_usuario || usuario.nombre_usuario;
        usuario.correo = correo || usuario.correo;
        usuario.contraseña = contraseña || usuario.contraseña;
        usuario.telefono = telefono || usuario.telefono;
        usuario.moneda_preferida = moneda_preferida || usuario.moneda_preferida;
        usuario.tipo_autenticacion = tipo_autenticacion || usuario.tipo_autenticacion;
        usuario.estado_cuenta = estado_cuenta || usuario.estado_cuenta;

        await usuario.save();
        res.status(200).json({ message: 'Usuario actualizado con éxito', usuario });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id_usuario } = req.params;

        const usuario = await Usuario.findByPk(id_usuario);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        await usuario.destroy();
        res.status(200).json({ message: 'Usuario eliminado con éxito' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};