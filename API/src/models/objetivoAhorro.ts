import sequelize from "../config/database";
const { DataTypes } = require('sequelize');

const ObjetivoAhorro = sequelize.define('ObjetivoAhorro', {
  id_objetivo_ahorro: {
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
  nombre_objetivo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  monto_meta: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false
  },
  monto_actual: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0.00
  },
  fecha_limite: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  prioridad: {
    type: DataTypes.ENUM('Alta', 'Media', 'Baja'),
    allowNull: false
  }
}, {
  tableName: 'objetivos_ahorro',
  indexes: [
    {
      fields: ['id_usuario']
    },
    {
      fields: ['fecha_limite']
    }
  ],
  timestamps: false
});

module.exports = ObjetivoAhorro;
