import { Model } from "sequelize";
import { TransaccionAttributes, TransaccionCreationAttributes } from "../interfaces/transaccionesInterface";

// Definición del modelo usando init
class Transaccion extends Model<TransaccionAttributes, TransaccionCreationAttributes> implements TransaccionAttributes {
    public id_transaccion!: number;
    public id_usuario!: number;
    public id_categoria!: number;
    public monto!: number;
    public fecha_transaccion?: Date;
    public descripcion?: string;
    public metodo_pago?: string;
    public recurrente?: boolean;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default Transaccion;