import { Sequelize } from "sequelize";
import db from "../config/db.js"
import Student from "./studentModel.js";
import Subject from "./subjectModel.js";

const { DataTypes } = Sequelize;

const Grade = db.define(
    "grade",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        jenis_nilai: DataTypes.STRING(50),
        nilai: DataTypes.FLOAT,
    },
    {
        freezeTableName: true,
    }
);

Grade.belongsTo(Student, {foreignKey: "student_id"});
Grade.belongsTo(Subject, {foreignKey: "subject_id"});

Student.hasMany(Grade, {foreignKey: "student_id"});
Subject.hasMany(Grade, {foreignKey: "subject_id"});

export default Grade;

// (async () => {
//     await db.sync();
// })();