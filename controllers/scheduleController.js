import Schedule from "../models/scheduleModel.js"; // Import the default export

// find all date
export const findAllSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findAll();
    res.status(200).json(schedule);
  } catch (error) {
    res.send(error.message);
  }
};
