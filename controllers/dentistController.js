import Dentist from "../models/dentistModel.js"; // Import the default export

// find all dentist
export const findAllDentist = async (req, res) => {
  try {
    const dentists = await Dentist.findAll();
    res.status(200).json(dentists);
  } catch (error) {
    res.send(error.message);
  }
};
