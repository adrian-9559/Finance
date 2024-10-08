import { DataTypes } from 'sequelize';
import sequelize from "../config/database";
import Transaccion from '../class/transaccionesClass';

Transaccion.init({
  id_transaccion: {
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
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categorias',
      key: 'id_categoria'
    }
  },
  monto: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false
  },
  fecha_transaccion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  metodo_pago: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  recurrente: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  sequelize,
  tableName: 'transacciones',
  indexes: [
    {
      fields: ['id_usuario']
    },
    {
      fields: ['id_categoria']
    },
    {
      fields: ['fecha_transaccion']
    }
  ],
  timestamps: false 
});

export default Transaccion;