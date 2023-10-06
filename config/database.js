import "dotenv/config.js";
import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);

db.authenticate()
  .then(() => console.log("Databse connected"))
  .catch((error) => console.log(`Unable to connect to database ${error}`));

export default db;
