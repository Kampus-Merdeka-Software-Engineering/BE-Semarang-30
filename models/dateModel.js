import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Date = db.define("schedule_dates", {
  schedule_date_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  schedule_date_date: {
    type: DataTypes.STRING,
  },
});

export default Date;

// If table "User doesn't exist", this function creates it
(async () => {
  await db.sync();
})();
