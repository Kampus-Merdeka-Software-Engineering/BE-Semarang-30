import Date from "../models/dateModel.js"; // Import the default export

// find all date
export const findAllDate = async (req, res) => {
  try {
    const dates = await Date.findAll();
    res.status(200).json(dates);
  } catch (error) {
    res.send(error.message);
  }
};
