import { Sequelize } from "sequelize";

const db = new Sequelize('aplikasi_data_nilai','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;