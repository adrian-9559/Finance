import { Optional } from "sequelize";

// Definir los atributos del modelo Usuario
export interface UsuarioAttributes {
    id_usuario: number;
    nombre_usuario: string;
    correo: string;
    contraseña: string;
    fecha_registro?: Date;
    telefono?: string;
    moneda_preferida?: string;
    tipo_autenticacion?: 'Normal' | '2FA';
    estado_cuenta?: 'Activo' | 'Inactivo';
  }
  
  // Definir los atributos que son opcionales al crear una instancia del modelo
  export interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id_usuario' | 'fecha_registro' | 'telefono' | 'moneda_preferida' | 'tipo_autenticacion' | 'estado_cuenta'> {}