import User from "../models/userModel.js";

// user register
export const signUpUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).json({ msg: "User created" });
  } catch (error) {
    res.send(error.message);
  }
};

// find user
export const findUser = async (req, res) => {
  try {
    const { user_id } = req.query;
    const result = await User.findOne({
      where: { user_id: user_id },
      attributes: { exclude: ["user_password"] },
    });
    res.status(200).json(result);
  } catch (error) {
    res.send(error.message);
  }
};

// find user email
export const findUserEmail = async (req, res) => {
  try {
    const { user_email } = req.query;
    const result = await User.findOne({
      where: { user_email: user_email },
      attributes: { exclude: ["user_password"] },
    });
    res.status(200).json(result);
  } catch (error) {
    res.send(error.message);
  }
};

// login user
export const loginUser = async (req, res) => {
  try {
    const { user_email, user_password } = req.query;
    const result = await User.findOne({
      where: { user_email: user_email, user_password: user_password },
    });

    if (result) {
      res.status(200).json({
        message: "Login successful",
        user_id: result.user_id,
        user_username: result.user_username,
      });
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    res.send(error.message);
  }
};
