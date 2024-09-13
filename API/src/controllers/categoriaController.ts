import { Request, Response } from 'express';
import Categoria from '../models/categoriaModel';

export const createCategoria = async (req: Request, res: Response) => {
    try {
        const { id_usuario, nombre_categoria, tipo_categoria } = req.body;

        const nuevaCategoria = await Categoria.create({
            id_usuario,
            nombre_categoria,
            tipo_categoria
        });

        res.status(201).json({
            message: 'Categoría creada con éxito',
            categoria: nuevaCategoria
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getCategoriaById = async (req: Request, res: Response) => {
    try {
        const { id_categoria } = req.params;

        const categoria = await Categoria.findByPk(id_categoria);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        res.status(200).json(categoria);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllCategorias = async (req: Request, res: Response) => {
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json(categorias);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCategoria = async (req: Request, res: Response) => {
    try {
        const { id_categoria } = req.params;
        const { id_usuario, nombre_categoria, tipo_categoria } = req.body;

        const categoria = await Categoria.findByPk(id_categoria);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        categoria.id_usuario = id_usuario || categoria.id_usuario;
        categoria.nombre_categoria = nombre_categoria || categoria.nombre_categoria;
        categoria.tipo_categoria = tipo_categoria || categoria.tipo_categoria;

        await categoria.save();
        res.status(200).json({ message: 'Categoría actualizada con éxito', categoria });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCategoria = async (req: Request, res: Response) => {
    try {
        const { id_categoria } = req.params;

        const categoria = await Categoria.findByPk(id_categoria);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        await categoria.destroy();
        res.status(200).json({ message: 'Categoría eliminada con éxito' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};