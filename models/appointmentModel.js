import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Appointment = db.define("appointments", {
  appointment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  dentist_id: {
    type: DataTypes.INTEGER,
  },
  schedule_date_id: {
    type: DataTypes.INTEGER,
  },
  schedule_time_id: {
    type: DataTypes.INTEGER,
  },
});

export default Appointment;
