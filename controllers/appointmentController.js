import Appointment from "../models/appointmentModel.js"; // Import the default export

// find all appointment
export const findAppointment = async (req, res) => {
  try {
    const { dentist_id, dentist_schedule_day } = req.query;
    const result = await Time.sequelize.query(
      "SELECT * FROM schedule_times WHERE schedule_time_id IN (SELECT schedule_time_id FROM dentist_schedules WHERE dentist_id = ? AND dentist_schedule_day = ?)",
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

export const createAppointment = async (req, res) => {
  try {
    await Appointment.create(req.body);
    res.status(200).json({ msg: "Appointment created" });
  } catch (error) {
    res.send(error.message);
  }
};
