import sequelize from "../config/database";
const { Model, DataTypes } = require('sequelize');

const Categoria = sequelize.define('Categoria', {
  id_categoria: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'usuarios',
      key: 'id_usuario'
    },
    onDelete: 'SET NULL'
  },
  nombre_categoria: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  tipo_categoria: {
    type: DataTypes.ENUM('Ingreso', 'Gasto'),
    allowNull: false
  }
}, {
  tableName: 'categorias',
  indexes: [
    {
      fields: ['id_usuario']
    },
    {
      fields: ['nombre_categoria']
    }
  ],
  timestamps: false
});

module.exports = Categoria;