import Appointment from "../models/appointmentModel.js"; // Import the default export
import { QueryTypes } from "sequelize";

export const createAppointment = async (req, res) => {
  try {
    await Appointment.create(req.body);
    res.status(200).json({ msg: "Appointment created" });
  } catch (error) {
    res.send(error.message);
  }
};

// find appointment
export const findAppointment = async (req, res) => {
  try {
    const { user_id } = req.query;
    const result = await Appointment.sequelize.query(
      "SELECT dentists.dentist_name, schedule_dates.schedule_date_date, DATE_FORMAT(schedule_times.schedule_time_start, '%H:%i') AS schedule_time_start, DATE_FORMAT(schedule_times.schedule_time_end, '%H:%i') AS schedule_time_end FROM appointments JOIN dentists ON appointments.dentist_id = dentists.dentist_id JOIN schedule_dates ON appointments.schedule_date_id = schedule_dates.schedule_date_id JOIN schedule_times ON appointments.schedule_time_id = schedule_times.schedule_time_id WHERE appointments.user_id = ? ORDER BY schedule_dates.schedule_date_date DESC LIMIT 1",
      {
        replacements: [user_id],
        type: QueryTypes.SELECT,
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.send(error.message);
  }
};
