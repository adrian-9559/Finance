import { Request, Response } from 'express';
import InformeFinanciero from '../models/informesFinancierosModel';

export const createInformeFinanciero = async (req: Request, res: Response) => {
    try {
        const { id_usuario, periodo_inicio, periodo_fin, total_ingresos, total_gastos, tipo_informe, archivo_informe } = req.body;

        const nuevoInformeFinanciero = await InformeFinanciero.create({
            id_usuario,
            periodo_inicio,
            periodo_fin,
            total_ingresos,
            total_gastos,
            tipo_informe,
            archivo_informe,
            fecha_generacion: new Date() // Proporcionar un valor para fecha_generacion
        });

        res.status(201).json({
            message: 'Informe financiero creado con éxito',
            informeFinanciero: nuevoInformeFinanciero
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getInformeFinancieroById = async (req: Request, res: Response) => {
    try {
        const { id_informe } = req.params;

        const informeFinanciero = await InformeFinanciero.findByPk(id_informe);
        if (!informeFinanciero) {
            return res.status(404).json({ message: 'Informe financiero no encontrado' });
        }

        res.status(200).json(informeFinanciero);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllInformesFinancieros = async (req: Request, res: Response) => {
    try {
        const informesFinancieros = await InformeFinanciero.findAll();
        res.status(200).json(informesFinancieros);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateInformeFinanciero = async (req: Request, res: Response) => {
    try {
        const { id_informe } = req.params;
        const { periodo_inicio, periodo_fin, total_ingresos, total_gastos, tipo_informe, archivo_informe } = req.body;

        const informeFinanciero = await InformeFinanciero.findByPk(id_informe);
        if (!informeFinanciero) {
            return res.status(404).json({ message: 'Informe financiero no encontrado' });
        }

        informeFinanciero.periodo_inicio = periodo_inicio || informeFinanciero.periodo_inicio;
        informeFinanciero.periodo_fin = periodo_fin || informeFinanciero.periodo_fin;
        informeFinanciero.total_ingresos = total_ingresos || informeFinanciero.total_ingresos;
        informeFinanciero.total_gastos = total_gastos || informeFinanciero.total_gastos;
        informeFinanciero.tipo_informe = tipo_informe || informeFinanciero.tipo_informe;
        informeFinanciero.archivo_informe = archivo_informe || informeFinanciero.archivo_informe;

        await informeFinanciero.save();
        res.status(200).json({ message: 'Informe financiero actualizado con éxito', informeFinanciero });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteInformeFinanciero = async (req: Request, res: Response) => {
    try {
        const { id_informe } = req.params;

        const informeFinanciero = await InformeFinanciero.findByPk(id_informe);
        if (!informeFinanciero) {
            return res.status(404).json({ message: 'Informe financiero no encontrado' });
        }

        await informeFinanciero.destroy();
        res.status(200).json({ message: 'Informe financiero eliminado con éxito' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};