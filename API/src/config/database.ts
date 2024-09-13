import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE_NAME as string,
    process.env.DATABASE_USER_ROOT as string,
    process.env.DATABASE_PASSWORD as string,
    {
        host: "localhost",
        dialect: "mysql",
    }
);

export default sequelize;
