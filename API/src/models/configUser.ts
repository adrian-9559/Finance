import sequelize from "../config/database";
const { DataTypes } = require('sequelize');

const ConfiguracionUsuario = sequelize.define('ConfiguracionUsuario', {
  id_configuracion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id_usuario'
    }
  },
  tema_interfaz: {
    type: DataTypes.ENUM('Claro', 'Oscuro'),
    defaultValue: 'Claro'
  },
  idioma: {
    type: DataTypes.STRING(50),
    defaultValue: 'Español'
  },
  notificaciones: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  frecuencia_alertas: {
    type: DataTypes.ENUM('Diaria', 'Semanal', 'Mensual'),
    defaultValue: 'Mensual'
  }
}, {
  tableName: 'configuracion_usuario',
  indexes: [
    {
      fields: ['id_usuario']
    }
  ],
  timestamps: false
});

module.exports = ConfiguracionUsuario;