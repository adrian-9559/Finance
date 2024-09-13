import { Optional } from "sequelize";

// Definición de interfaces para los tipos de datos
export interface TransaccionAttributes {
    id_transaccion: number;
    id_usuario: number;
    id_categoria: number;
    monto: number;
    fecha_transaccion?: Date;
    descripcion?: string;
    metodo_pago?: string;
    recurrente?: boolean;
}

export interface TransaccionCreationAttributes extends Optional<TransaccionAttributes, 'id_transaccion'> { }