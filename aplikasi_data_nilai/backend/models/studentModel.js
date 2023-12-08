import { Sequelize } from "sequelize";
import db from "../config/db.js"

const { DataTypes } = Sequelize;

const Student = db.define(
    "student",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nomor_induk: DataTypes.STRING(20),
        nama: DataTypes.STRING(25),
        alamat: DataTypes.TEXT,
        tanggal_lahir: DataTypes.DATE,
    },
    {
        freezeTableName: true,
    }
);

export default Student;

// (async () => {
//     await db.sync();
// })();