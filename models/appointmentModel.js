import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Appointment = db.define("appointments", {
  appointment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.STRING,
  },
  dentist_id: {
    type: DataTypes.STRING,
  },
  schedule_date_id: {
    type: DataTypes.STRING,
  },
  schedule_time_id: {
    type: DataTypes.STRING,
  },
});

export default Appointment;

(async () => {
  await db.sync();
})();
