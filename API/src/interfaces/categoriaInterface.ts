import { Optional } from 'sequelize';

// Definición de los tipos de datos
export interface CategoriaAttributes {
    id_categoria: number;
    id_usuario?: number;
    nombre_categoria: string;
    tipo_categoria: 'Ingreso' | 'Gasto';
  }
  
export interface CategoriaCreationAttributes extends Optional<CategoriaAttributes, 'id_categoria'> {}