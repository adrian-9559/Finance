import { Model } from "sequelize";
import { ObjetivoAhorroAttributes, ObjetivoAhorroCreationAttributes } from "../interfaces/objetivoAhorroInterface";

// Definición del modelo
class ObjetivoAhorro extends Model<ObjetivoAhorroAttributes, ObjetivoAhorroCreationAttributes> implements ObjetivoAhorroAttributes {
    public id_objetivo_ahorro!: number;
    public id_usuario!: number;
    public nombre_objetivo!: string;
    public monto_meta!: number;
    public monto_actual!: number;
    public fecha_limite!: string;
    public prioridad!: 'Alta' | 'Media' | 'Baja';

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default ObjetivoAhorro;