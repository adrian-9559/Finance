import { DataTypes } from 'sequelize';
import sequelize from "../config/database";
import UsuarioClass from "../class/usuarioClass";

UsuarioClass.init({
  id_usuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nombre_usuario: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  contraseña: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  moneda_preferida: {
    type: DataTypes.STRING(10),
    defaultValue: 'USD'
  },
  tipo_autenticacion: {
    type: DataTypes.ENUM('Normal', '2FA'),
    defaultValue: 'Normal'
  },
  estado_cuenta: {
    type: DataTypes.ENUM('Activo', 'Inactivo'),
    defaultValue: 'Activo'
  }
}, {
  sequelize,
  tableName: 'usuarios',
  indexes: [
    {
      unique: true,
      fields: ['correo']
    },
    {
      fields: ['correo']
    }
  ],
  timestamps: false
});

export default UsuarioClass;