import User from "../models/userModel.js";

// user sign up
export const signUpUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).json({ msg: "User created" });
  } catch (error) {
    res.send(error.message);
  }
};

// find all user
export const findAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.send(error.message);
  }
};
