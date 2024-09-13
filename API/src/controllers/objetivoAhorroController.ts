import { Request, Response } from 'express';
import ObjetivoAhorro from '../models/objetivoAhorroModel';

export const createObjetivoAhorro = async (req: Request, res: Response) => {
    try {
        const { id_usuario, nombre_objetivo, monto_meta, monto_actual, fecha_limite, prioridad } = req.body;

        const nuevoObjetivoAhorro = await ObjetivoAhorro.create({
            id_usuario,
            nombre_objetivo,
            monto_meta,
            monto_actual,
            fecha_limite,
            prioridad
        });

        res.status(201).json({
            message: 'Objetivo de ahorro creado con éxito',
            objetivoAhorro: nuevoObjetivoAhorro
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getObjetivoAhorroById = async (req: Request, res: Response) => {
    try {
        const { id_objetivo_ahorro } = req.params;

        const objetivoAhorro = await ObjetivoAhorro.findByPk(id_objetivo_ahorro);
        if (!objetivoAhorro) {
            return res.status(404).json({ message: 'Objetivo de ahorro no encontrado' });
        }

        res.status(200).json(objetivoAhorro);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllObjetivosAhorro = async (req: Request, res: Response) => {
    try {
        const objetivosAhorro = await ObjetivoAhorro.findAll();
        res.status(200).json(objetivosAhorro);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateObjetivoAhorro = async (req: Request, res: Response) => {
    try {
        const { id_objetivo_ahorro } = req.params;
        const { nombre_objetivo, monto_meta, monto_actual, fecha_limite, prioridad } = req.body;

        const objetivoAhorro = await ObjetivoAhorro.findByPk(id_objetivo_ahorro);
        if (!objetivoAhorro) {
            return res.status(404).json({ message: 'Objetivo de ahorro no encontrado' });
        }

        objetivoAhorro.nombre_objetivo = nombre_objetivo || objetivoAhorro.nombre_objetivo;
        objetivoAhorro.monto_meta = monto_meta || objetivoAhorro.monto_meta;
        objetivoAhorro.monto_actual = monto_actual || objetivoAhorro.monto_actual;
        objetivoAhorro.fecha_limite = fecha_limite || objetivoAhorro.fecha_limite;
        objetivoAhorro.prioridad = prioridad || objetivoAhorro.prioridad;

        await objetivoAhorro.save();
        res.status(200).json({ message: 'Objetivo de ahorro actualizado con éxito', objetivoAhorro });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteObjetivoAhorro = async (req: Request, res: Response) => {
    try {
        const { id_objetivo_ahorro } = req.params;

        const objetivoAhorro = await ObjetivoAhorro.findByPk(id_objetivo_ahorro);
        if (!objetivoAhorro) {
            return res.status(404).json({ message: 'Objetivo de ahorro no encontrado' });
        }

        await objetivoAhorro.destroy();
        res.status(200).json({ message: 'Objetivo de ahorro eliminado con éxito' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};