import { Model } from "sequelize";
import { ConfiguracionUsuarioAttributes, ConfiguracionUsuarioCreationAttributes } from "../interfaces/configUserInterface";

// Definición del modelo
class ConfiguracionUsuario extends Model<ConfiguracionUsuarioAttributes, ConfiguracionUsuarioCreationAttributes>
  implements ConfiguracionUsuarioAttributes {
  public id_configuracion!: number;
  public id_usuario!: number;
  public tema_interfaz!: 'Claro' | 'Oscuro';
  public idioma!: string;
  public notificaciones!: boolean;
  public frecuencia_alertas!: 'Diaria' | 'Semanal' | 'Mensual';
}

export default ConfiguracionUsuario;