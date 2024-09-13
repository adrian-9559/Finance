import { Optional } from "sequelize";

// Definición de interfaces
export interface ObjetivoAhorroAttributes {
    id_objetivo_ahorro: number;
    id_usuario: number;
    nombre_objetivo: string;
    monto_meta: number;
    monto_actual?: number;
    fecha_limite: string;
    prioridad: 'Alta' | 'Media' | 'Baja';
}

export interface ObjetivoAhorroCreationAttributes extends Optional<ObjetivoAhorroAttributes, 'id_objetivo_ahorro' | 'monto_actual'> { }