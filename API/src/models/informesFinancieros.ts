import sequelize from "../config/database";
const { DataTypes } = require('sequelize');

const InformeFinanciero = sequelize.define('InformeFinanciero', {
  id_informe: {
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
  periodo_inicio: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  periodo_fin: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  total_ingresos: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0.00
  },
  total_gastos: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 0.00
  },
  fecha_generacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  tipo_informe: {
    type: DataTypes.ENUM('Mensual', 'Anual', 'Personalizado'),
    allowNull: false
  },
  archivo_informe: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'informes_financieros',
  indexes: [
    {
      fields: ['id_usuario']
    },
    {
      fields: ['fecha_generacion']
    }
  ],
  timestamps: false
});

module.exports = InformeFinanciero;