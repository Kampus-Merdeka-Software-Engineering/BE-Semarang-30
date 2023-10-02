import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Dentist = db.define("dentists", {
  dentist_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dentist_name: {
    type: DataTypes.STRING,
  },
  dentist_email: {
    type: DataTypes.STRING,
  },
});

export default Dentist;

// If table "User doesn't exist", this function creates it
(async () => {
  await db.sync();
})();
