import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Schedule = db.define(
  "dentist_schedules",
  {
    dentist_schedule_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dentist_id: {
      type: DataTypes.INTEGER,
    },
    dentist_schedule_day: {
      type: DataTypes.STRING,
    },
    schedule_time_id: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export default Schedule;

// Create table "dentist_schedules" if doesn't exist
(async () => {
  await db.sync();
})();
