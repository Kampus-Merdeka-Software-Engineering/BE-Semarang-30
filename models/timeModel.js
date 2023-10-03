import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Time = db.define("schedule_times", {
  schedule_time_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  schedule_time_start: {
    type: DataTypes.TIME,
  },
  schedule_time_end: {
    type: DataTypes.TIME,
  },
});

export default Time;

// Create table "schedule_times" if doesn't exist
(async () => {
  await db.sync();
})();
