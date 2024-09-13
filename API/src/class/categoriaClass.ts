import { Model } from "sequelize";
import { CategoriaAttributes, CategoriaCreationAttributes } from "../interfaces/categoriaInterface";

// Definición del modelo
class Categoria extends Model<CategoriaAttributes, CategoriaCreationAttributes> implements CategoriaAttributes {
    public id_categoria!: number;
    public id_usuario?: number;
    public nombre_categoria!: string;
    public tipo_categoria!: 'Ingreso' | 'Gasto';
  }

  export default Categoria;