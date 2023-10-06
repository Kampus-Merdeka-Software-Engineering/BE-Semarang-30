import Time from "../models/timeModel.js"; // Import the default export
import { QueryTypes } from "sequelize";

// find all time
export const findAllTime = async (req, res) => {
  try {
    const times = await Time.findAll();
    res.status(200).json(times);
  } catch (error) {
    res.send(error.message);
  }
};

// find time by dentist_schedules(dentist_id, dentist_schedule_day)
export const findDentistSchedulesTime = async (req, res) => {
  try {
    const { dentist_id, dentist_schedule_day } = req.query;
    const result = await Time.sequelize.query(
      "SELECT *, DATE_FORMAT(schedule_times.schedule_time_start, '%H:%i') AS schedule_time_start, DATE_FORMAT(schedule_times.schedule_time_end, '%H:%i') AS schedule_time_end FROM schedule_times WHERE schedule_time_id IN (SELECT schedule_time_id FROM dentist_schedules WHERE dentist_id = ? AND dentist_schedule_day = ?)",
      {
        replacements: [dentist_id, dentist_schedule_day],
        type: QueryTypes.SELECT,
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.send(error.message);
  }
};
