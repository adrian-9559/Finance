import { Request, Response } from 'express';
import Transaccion from '../models/transaccionModel';

export const createTransaccion = async (req: Request, res: Response) => {
    try {
        const { monto, tipo_transaccion, fecha, descripcion, id_usuario, id_categoria, metodo_pago, recurrente } = req.body;

        const nuevaTransaccion = await Transaccion.create({
            monto,
            fecha_transaccion: fecha,
            descripcion,
            id_usuario,
            id_categoria,
            metodo_pago,
            recurrente
        });

        res.status(201).json({
            message: 'Transacción creada con éxito',
            transaccion: nuevaTransaccion
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getTransaccionById = async (req: Request, res: Response) => {
    try {
        const { id_transaccion } = req.params;

        const transaccion = await Transaccion.findByPk(id_transaccion);
        if (!transaccion) {
            return res.status(404).json({ message: 'Transacción no encontrada' });
        }

        res.status(200).json(transaccion);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllTransacciones = async (req: Request, res: Response) => {
    try {
        const transacciones = await Transaccion.findAll();
        res.status(200).json(transacciones);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTransaccion = async (req: Request, res: Response) => {
    try {
        const { id_transaccion } = req.params;
        const { monto, tipo, fecha, descripcion, id_usuario } = req.body;

        const transaccion = await Transaccion.findByPk(id_transaccion);
        if (!transaccion) {
            return res.status(404).json({ message: 'Transacción no encontrada' });
        }

        transaccion.monto = monto || transaccion.monto;
        transaccion.fecha_transaccion = fecha || transaccion.fecha_transaccion;
        transaccion.descripcion = descripcion || transaccion.descripcion;
        transaccion.id_usuario = id_usuario || transaccion.id_usuario;

        await transaccion.save();
        res.status(200).json({ message: 'Transacción actualizada con éxito', transaccion });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteTransaccion = async (req: Request, res: Response) => {
    try {
        const { id_transaccion } = req.params;

        const transaccion = await Transaccion.findByPk(id_transaccion);
        if (!transaccion) {
            return res.status(404).json({ message: 'Transacción no encontrada' });
        }

        await transaccion.destroy();
        res.status(200).json({ message: 'Transacción eliminada con éxito' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};