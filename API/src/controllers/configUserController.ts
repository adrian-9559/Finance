import { Request, Response } from 'express';
import ConfiguracionUsuario from '../models/configUserModel';

export const createConfiguracionUsuario = async (req: Request, res: Response) => {
    try {
        const { id_usuario, tema_interfaz, idioma, notificaciones, frecuencia_alertas } = req.body;

        const nuevaConfiguracionUsuario = await ConfiguracionUsuario.create({
            id_usuario,
            tema_interfaz,
            idioma,
            notificaciones,
            frecuencia_alertas
        });

        res.status(201).json({
            message: 'Configuración de usuario creada con éxito',
            configuracionUsuario: nuevaConfiguracionUsuario
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getConfiguracionUsuarioById = async (req: Request, res: Response) => {
    try {
        const { id_configuracion } = req.params;

        const configuracionUsuario = await ConfiguracionUsuario.findByPk(id_configuracion);
        if (!configuracionUsuario) {
            return res.status(404).json({ message: 'Configuración de usuario no encontrada' });
        }

        res.status(200).json(configuracionUsuario);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllConfiguracionesUsuario = async (req: Request, res: Response) => {
    try {
        const configuracionesUsuario = await ConfiguracionUsuario.findAll();
        res.status(200).json(configuracionesUsuario);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateConfiguracionUsuario = async (req: Request, res: Response) => {
    try {
        const { id_configuracion } = req.params;
        const { id_usuario, tema_interfaz, idioma, notificaciones, frecuencia_alertas } = req.body;

        const configuracionUsuario = await ConfiguracionUsuario.findByPk(id_configuracion);
        if (!configuracionUsuario) {
            return res.status(404).json({ message: 'Configuración de usuario no encontrada' });
        }

        configuracionUsuario.id_usuario = id_usuario || configuracionUsuario.id_usuario;
        configuracionUsuario.tema_interfaz = tema_interfaz || configuracionUsuario.tema_interfaz;
        configuracionUsuario.idioma = idioma || configuracionUsuario.idioma;
        configuracionUsuario.notificaciones = notificaciones || configuracionUsuario.notificaciones;
        configuracionUsuario.frecuencia_alertas = frecuencia_alertas || configuracionUsuario.frecuencia_alertas;

        await configuracionUsuario.save();
        res.status(200).json({ message: 'Configuración de usuario actualizada con éxito', configuracionUsuario });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteConfiguracionUsuario = async (req: Request, res: Response) => {
    try {
        const { id_configuracion } = req.params;

        const configuracionUsuario = await ConfiguracionUsuario.findByPk(id_configuracion);
        if (!configuracionUsuario) {
            return res.status(404).json({ message: 'Configuración de usuario no encontrada' });
        }

        await configuracionUsuario.destroy();
        res.status(200).json({ message: 'Configuración de usuario eliminada con éxito' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};