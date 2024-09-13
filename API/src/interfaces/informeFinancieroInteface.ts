import { Optional } from "sequelize";

// Definición de las interfaces
export interface InformeFinancieroAttributes {
    id_informe: number;
    id_usuario: number;
    periodo_inicio: Date;
    periodo_fin: Date;
    total_ingresos: number;
    total_gastos: number;
    fecha_generacion: Date;
    tipo_informe: 'Mensual' | 'Anual' | 'Personalizado';
    archivo_informe?: string;
  }
  
export interface InformeFinancieroCreationAttributes extends Optional<InformeFinancieroAttributes, 'id_informe' | 'archivo_informe' | 'fecha_generacion'> {}