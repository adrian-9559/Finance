import { Model } from "sequelize";
import { InformeFinancieroAttributes, InformeFinancieroCreationAttributes } from "../interfaces/informeFinancieroInteface";

// Definición del modelo
class InformeFinanciero extends Model<InformeFinancieroAttributes, InformeFinancieroCreationAttributes> implements InformeFinancieroAttributes {
    public id_informe!: number;
    public id_usuario!: number;
    public periodo_inicio!: Date;
    public periodo_fin!: Date;
    public total_ingresos!: number;
    public total_gastos!: number;
    public fecha_generacion!: Date;
    public tipo_informe!: 'Mensual' | 'Anual' | 'Personalizado';
    public archivo_informe?: string;
}

export default InformeFinanciero;