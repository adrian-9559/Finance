import { Optional } from "sequelize";

// Definición de los tipos de datos
export interface ConfiguracionUsuarioAttributes {
    id_configuracion: number;
    id_usuario: number;
    tema_interfaz: 'Claro' | 'Oscuro';
    idioma: string;
    notificaciones: boolean;
    frecuencia_alertas: 'Diaria' | 'Semanal' | 'Mensual';
  }
  
export interface ConfiguracionUsuarioCreationAttributes extends Optional<ConfiguracionUsuarioAttributes, 'id_configuracion'> {}