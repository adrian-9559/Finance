import { DataTypes } from "sequelize";
import sequelize from "../config/database";
import Categoria from "../class/categoriaClass";

// Inicialización del modelo
Categoria.init({
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
  sequelize,
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

export default Categoria;