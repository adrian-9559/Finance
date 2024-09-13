import { Model } from 'sequelize';
import { UsuarioAttributes, UsuarioCreationAttributes } from '../interfaces/usuarioInterface';

// Definir la clase del modelo Usuario
class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  public id_usuario!: number;
  public nombre_usuario!: string;
  public correo!: string;
  public contraseña!: string;
  public fecha_registro!: Date;
  public telefono!: string;
  public moneda_preferida!: string;
  public tipo_autenticacion!: 'Normal' | '2FA';
  public estado_cuenta!: 'Activo' | 'Inactivo';
}

export default Usuario;