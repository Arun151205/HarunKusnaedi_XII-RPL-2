import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Subject = db.define(
    "subject",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nama: DataTypes.STRING(255),
        bobot: DataTypes.FLOAT,
    },
    {
        freezeTableName: true,
    }
);

export default Subject;

// (async () => {
//     await db.sync();
// })();