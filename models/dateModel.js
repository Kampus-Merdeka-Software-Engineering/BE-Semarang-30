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

// Create table "schedule_dates" if doesn't exist
(async () => {
  await db.sync();
})();
